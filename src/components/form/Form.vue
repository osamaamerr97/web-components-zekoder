<template>
    <div :style="styleObj">
        <zek-heading v-if="heading" v-bind="headingProps"></zek-heading>
        <zek-heading v-if="subheading" v-bind="subheadingProps"></zek-heading>
        <zek-text v-if="description" v-bind="descProps"></zek-text>
        <form v-on:submit.prevent="submitForm" action="/" method="">
            <div class="form-group" v-for="(field,i) in inputs" :key="'field'+i">
                <label v-if="field.label" :for="field.name+i">{{field.label}} <span v-if="field.required">*</span></label>
                <input v-if="field.type=='short-text'"
                    :type="field.inputType"
                    :name="field.name" 
                    :placeholder="field.placeholder" 
                    :id="field.name+i"
                    :required="field.required"
                    :style="field.styleObj"
                    v-model="formData[field.name]"
                    >
                <textarea v-else-if="field.type=='long-text'" 
                    :name="field.name"
                    :placeholder="field.placeholder"
                    :id="field.name+i" 
                    :required="field.required"
                    v-model="formData[field.name]"
                    cols="30"
                    rows="10"></textarea>
                <input v-else-if="field.type=='number'"
                    type="number"
                    :placeholder="field.placeholder"
                    :name="field.name"
                    :id="field.name+i"
                    :required="field.required"
                    v-model="formData[field.name]"
                    >
            </div>

            <zek-text v-if="successMessage" :text="successMessage" class="text-success"></zek-text>
            <zek-text v-if="errorMessage" :text="errorMessage" class="text-danger"></zek-text>
            <zek-button v-if="cancelProps.show" v-bind="cancelProps" @onClick="cancelForm()"></zek-button>            
            <zek-button v-if="submitProps.show" v-bind="submitProps"></zek-button>            
        </form>
    </div>
</template>

<script>
// import ZekColumnContent from "../column-content/ColumnContent.vue"
import ZekButton from "../action-button/ActionButton.vue";
import ZekHeading from "../heading-block/HeadingBlock.vue";
import ZekText from "../text-block/TextBlock.vue"
export default {
    components: { ZekButton,ZekHeading,ZekText},
    name: "ZekForm",
    props: {
        heading: [String,Object], //for object it should be {text:String, headingLevel:Number, styleObj:Object}
        subheading: [String,Object],
        description: [String,Object], //for object {text: String, lineBreaks: Number, styleObj: Object}
        inputs: {
            type: Array, //array of objects
            required: true
        },
        submitButton: [String, Object], //for string it is button label, for object it should be {show:true, label:'Submit', styleObj: {}}
        cancelButton: [String, Object],
        theme: String,
        successMessage: String,
        errorMessage: String,
        forgotPassword: Boolean,
        rememberMe: Boolean,
        styleObj: Object,
    },
    data() {
        return {
            formData: {},
            defaultData: {}
        };
    },
    created() {
        this.inputs.forEach(input => {
            this.formData[input.name] = input.value;
        });
        this.defaultData = {...{}, ...this.formData};
    },
    computed: {
        headingProps() {
            return typeof(this.heading)=='string'? {text: this.heading, headingLevel:1} : this.heading;
        },
        subheadingProps() {
            return typeof(this.subheading)=='string'? {text: this.subheading, headingLevel:3} : this.subheading;
        },
        descProps() {
            return typeof(this.description)=='string'? {text: this.description} : this.subheading;
        },
        cancelProps() {
            let props= {
                theme: this.theme,
                buttonType: 'button',
                label: 'Cancel',
                show: true
            };
            if(typeof(this.cancelButton)=='string'){
                props = { ...props,
                    label: this.cancelButton,
                    show: this.cancelButton
                }
            } else {
                props = { ...props,
                    ...this.cancelButton
                }
            }
            return props
        },
        submitProps() {
            let props= {
                theme: this.theme,
                buttonType: 'submit',
                label: 'Submit',
                show: true
            };
            if(typeof(this.submitButton)=='string'){
                props = { ...props,
                    label: this.submitButton,
                    show: this.submitButton
                }
            } else {
                props = { ...props,
                    ...this.submitButton
                }
            }
            return props
        }
    },
    methods: {
        submitForm() {
            this.$emit('submit', this.formData);

        },
        cancelForm() {
            this.resetForm();
            this.$emit('cancel', this.formData);
        },
        resetForm() {
            this.formData = {...{}, ...this.defaultData};
        }
    }
};
</script>

<style scoped>
.zek-card {
  width: 100%;
  background-color: var(--background-color);
  box-sizing: border-box;
}
.zek-card:hover {
  background-color: var(--hover-background-color);
}
.zek-card > .zek-card-content {
  padding: 10px;
}
</style>
