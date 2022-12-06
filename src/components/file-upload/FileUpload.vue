<template>
    <div class="zek-file-upload" :style="styleObject">
        <span v-if="label" :style="label.style">
            <span v-html="label.html || label.text || label" ></span>
            <span class="required-asterik" v-if="required">*</span>
        </span>
        <input 
            type="file"
            :required="required"
            :disabled="disabled"
            :readonly="readonly"
            :name="name"
            :id="id"
            :style="inputStyle"
            :class="customClass"
            :placeholder="placeholder"
            :multiple="multiple"
            @change="uploadFiles($event.target.files)">
    </div>
</template>

<script>
import * as axios from 'axios';
export default {
    name: "ZekFileUpload",
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
            loading: false
        }
    },
    methods: {
        uploadFiles(files) {
            var file = files[0];
            if(!this.uploadUrl || !file) {
                this.$emit("onChange",this.multiple ? files : (file || null))
                return;
            } else {
                let formData = new FormData();
                formData.append('file', file);
                document.getElementById(this.id).setCustomValidity('uploading file...')
                axios({
                    method: 'post',
                    url: this.uploadUrl,
                    data: formData
                })
                .then(res => {
                    document.getElementById(this.id).setCustomValidity('');
                    if(res && res.data && res.data[this.dataKey]) {
                        this.$emit('onChange', this.fetchUrl+res.data[this.dataKey])
                    }
                })
                .catch(err => {
                    console.log(err);
                });
                
            }
        }
    }
}
</script>