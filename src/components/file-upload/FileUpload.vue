<template>
    <div class="zek-file-upload" :style="styleObject">
        <span v-if="label" :style="label.style">
            <span v-html="label.html || label.text || label" ></span>
            <span class="required-asterik" v-if="required">*</span>
        </span>

        <file-pond
            name="file-upload"
            ref="pond"
            label-idle="Drop files here or <span class='filepond--label-action'>Browse</span>"
            :allowMultiple="multiple"
            accepted-file-types="image/jpeg, image/png"
            v-bind:files="files"
            :credits="null"
            @addfile="uploadFiles"
        />
    </div>
</template>

<script>
import * as axios from 'axios';
 import vueFilePond from 'vue-filepond';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

// Create component
const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
)
export default {
    name: "ZekFileUpload",
    components: {
        FilePond
    },
    props: {
        label: {
            type: [String, Object]
        },
        required: Boolean,
        multiple: Boolean,
        dragDrop: Boolean,
        uploadUrl: String,
        fetchUrl: {
            type: String,
            default: ""
        },
        dataKey: {
            type: String,
            default: 'id'
        },
        showLoader: Boolean,
        customClass: {
            type: String,
            default: "",
        },
        inputStyle: Object,
        disabled: Boolean,
        styleObject: {
            type: Object,
            default: () => ({
                position: "relative"
            }),
        },
        name: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            default: "file-upload-input",
        },
        placeholder: {
            type: String,
            default: "",
        },
        readonly: Boolean
    },
    data() {
        return {
            loading: false,
            files: [],
            fileIds: []
        }
    },
    methods: {
        uploadFiles(error, fileObject) {
            // return console.log(files);
            if ( error ) {
                return;
            }

            const file = fileObject.file;
            if(!this.uploadUrl || !file) {
                this.$emit("onChange",this.multiple ? files : (file || null))
                return;
            } else {
                let formData = new FormData();
                formData.append('file', file);
                // document.getElementById(this.id).setCustomValidity('uploading file...')
                axios({
                    method: 'post',
                    url: this.uploadUrl,
                    data: formData
                }).then(res => {
                    // document.getElementById(this.id).setCustomValidity('');
                    if ( res && res.data && res.data[this.dataKey] ) {
                        if ( this.multiple ) {
                            this.fileIds.push(this.fetchUrl+res.data[this.dataKey])
                            this.$emit('onChange', this.fileIds)
                        } else {
                            this.$emit('onChange', this.fetchUrl+res.data[this.dataKey])
                        }
                    }
                }).catch(err => {
                    console.log(err);
                });
                
            }
        }
    }
}
</script>