<template>
<div class="video-container" @click="$emit('onClick', $event)">
    <video v-if="source=='local'"
        :style="styleObj"
        :src="url"
        :width="width"
        :height="height"
        :muted="isMuted"
        :loop="loop"
        :controls="showControls"
        :autoplay="autoplay">
    </video>
    <div v-else-if="source=='youtube'" ref="ytplayer" id="yt" :style="styleObj" ></div>
    <iframe v-else ref="zekPlayer" id="zekPlayer" :src="videoUrl" :style="styleObj" :width="width" :height="height" allow="autoplay;" frameborder="0"></iframe>
</div>
</template>

<script>
import Player from '@vimeo/player'

export default {
    name: 'ZekVideo',
    props: {
        height: [Number, String],
        width: [Number, String],
        source: String, //local, youtube, dailymotion, vimeo
        url: {
            type: String,
            required: true
        },
        isMuted: Boolean,
        loop: Boolean,
        showControls: Boolean,
        autoplay: Boolean,
        styleObj: Object
    },
    data() {
        return {
            player: null
        }
    },
    computed: {
        videoUrl() {
            let url = this.url+'?';
            if(this.isMuted) {
                url += this.source=='vimeo'? 'muted=1&' : 'mute=1&';
            }
            if(this.loop) {
                let id = this.url.split('/').at(-1);
                url += this.source=='youtube'? 'playlist='+id+'&loop=1&' : 'loop=1&';
            }
            if(!this.showControls) {
                url += 'controls=0&'
            }
            if(this.autoplay) {
                url += 'autoplay=1&'
            }
            return url;
        }
    },
    mounted() {
        if(this.source == 'vimeo' && this.url) {
            let iframe = this.$refs.zekPlayer;
            this.player = new Player(iframe);
            this.player.on('playing', () => this.videoStarted());
            this.player.on('pause', () => this.videoStopped());
            this.player.on('ended', () => this.videoStopped());
        }
        else if(this.source == 'youtube' && this.url) {
            let ytScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
            if(ytScript){
                this.createPlayer();
            } else {
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                window.onYouTubeIframeAPIReady = () => {
                    this.createPlayer();
                }
            }
        }
    },
    beforeUnmount() {
        if(this.player){
            this.player.destroy();
        }
    },
    methods: {
        videoStarted() {
            this.$emit('videoStart');
        },
        videoStopped() {
            this.$emit('videoStop');
        },
        createPlayer() {
            let videoId = this.url.split('/').at(-1);
            this.player = new YT.Player(this.$refs.ytplayer.id, {
                height: this.height,
                width: this.width,
                videoId: videoId,
                playerVars: {
                    playsinline: 1,
                    mute: this.isMuted,
                    loop: this.loop,
                    playlist: videoId,
                    controls: this.showControls? 1: 0,
                    autoplay: this.autoplay
                },
                events: {
                    onStateChange: (event) => {
                        if (event.data == YT.PlayerState.PLAYING) {
                            this.videoStarted();
                        } else if(event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
                            this.videoStopped();
                        }
                    }
                }
            });
        }
    }
}
</script>