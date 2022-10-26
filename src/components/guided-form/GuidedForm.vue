<template>
    <div id="guided-form-container" :class="customClass" :style="styleObj">
        <div v-if="currentStep" class="row question">
            <div class="col">
                <div class="row title">
                    <div class="col">
                        <span v-if="currentStep.title" :style="currentStep.title.style">
                            <span v-html="currentStep.title.html || currentStep.title.text || currentStep.title" ></span>
                        </span>
                    </div>
                </div>
                <div class="row input">
                    <div class="col">
                        <form @submit.prevent="changeStep(stepNumber+1)">
                            <zek-column-content :column="content()" />
                            <!-- <ZekDropdown 
                                v-if="currentStep.type=='dropdown'"
                                v-bind="currentStep"
                                :selectType="currentStep.multiple?'Multi':'single'"
                                :items="currentStep.options"
                                @onSelect="onAnswer"
                            />
                            <ZekTextarea
                                v-else-if="currentStep.type=='longText'"
                                v-bind="currentStep"
                                :initialValue="currentStep.value||''"
                                :minMaxValue="{min:currentStep.min, max:currentStep.max}"
                                @onChange="onAnswer"
                            />
                            <ZekInput
                                v-else
                                v-bind="currentStep"
                                :inputType="currentStep.type||'text'"
                                :initialValue="currentStep.value||''"
                                :minMaxValue="{min:currentStep.min, max:currentStep.max}"
                                @onInput="onAnswer"
                            /> -->
                            <span class="desc" v-if="currentStep.description">{{currentStep.description}}</span>
                            <div class="row justify-content-center buttons">
                                <div class="col-auto back-button" v-if="allowNavigate">
                                    <ZekButton
                                        v-if="stepNumber"
                                        v-bind="backProps"
                                        @onClick="changeStep(stepNumber-1)"
                                    />
                                </div>
                                <div class="col-auto next-button">
                                    <ZekButton
                                        v-if="stepNumber<steps.length"
                                        v-bind="nextProps"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="completed" class="row completed-screen">
            <div class="col text-center">
                <slot name="formCompleted">
                    <h1> Thank you for completing the form.</h1>
                    <h3> Press the submit button below to complete the form submission. Or you can go back to review your answers.</h3>
                    <ZekButton
                        v-bind="backProps"
                        @onClick="changeStep(stepNumber-1)"
                    />
                    <ZekButton
                        :label="'Submit'"
                        :theme="'Bootstrap'"
                        @onClick="submitForm"
                    />
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
import { ZekButton, ZekColumnContent } from "../../main";

export default {
    name: "ZekGuidedForm",
    components: {ZekButton, ZekColumnContent },
    props: {
        steps: {
            type: Array,
            required: true
         }, /* [
            {
                type: String [(all html input types),longText,URL,dropdown,multipleChoice,OpinionScale,IconRate],
                id: String (unique id to be used as question identifier as well as form data identifier),
                name: String
                label: String,Object {text,html,style}
                title: String, Object {text,html,style}
                multiple: Boolean (allow selection of multiple values),
                required: Boolean,
                description: String (text below question),
                value: String,Number,Boolean, Array in case of multiple true(Prefilled value of question. Also used to receive value),
                options:  Array (used only with Dropdown, {text,value}),
                placeholder: String,
                min: Number,
                max: number, also works as max length
                accept: (used with type = file to define what file types should be accepted)
            }
        ] */
        // showProgress: Boolean,
        allowNavigate: Boolean,
        customClass: String,
        styleObj: Object,
        backButton: [String, Object], //for string it is button label, for object it should be button component props
        nextButton: [String, Object],
    },
    data() {
        return {
            content: () => {
                const step = this.currentStep;
                return {
                    columnWidth: step.columnWidth || 12,
                    content: {
                        component: step.type == 'long-text' ? 'textarea' : step.type === 'radio' ? 'radio-button' : step.type === 'dropdown' ? 'dropdown' : 'input',
                        data: step,
                        events: step.type == 'long-text' ?  {
                            onChange: (e) => {
                                this.formData[step.name] = e;
                                this.formSteps[this.stepNumber].value = e;
                                this.formSteps[this.stepNumber].initialValue = e;
                                this.emitLatestData(step.name);
                            }
                        } :
                        step.type == 'dropdown' ? {
                            onSelect: e => { 
                                this.formData[step.name] = e[0]; 
                                this.formSteps[this.stepNumber].value = e[0];
                                this.formSteps[this.stepNumber].initialValue = e[0];
                                this.emitLatestData(step.name);
                            }
                        } : {
                            onInput: (e) => {
                                if ( step.inputType === 'checkbox' ) {
                                    this.formData[step.name] = e.target.checked;
                                    this.formSteps[this.stepNumber].value = e.target.checked;
                                    this.formSteps[this.stepNumber].initialValue = e.target.checked;
                                } else if ( step.inputType === 'radio' ) {
                                    this.formData[step.name] = e.value;
                                this.formSteps[this.stepNumber].value = e.value;
                                this.formSteps[this.stepNumber].initialValue = e.value;
                                } else {
                                    this.formData[step.name] = e.target.value;
                                    this.formSteps[this.stepNumber].value = e.target.value;
                                    this.formSteps[this.stepNumber].initialValue = e.target.value;
                                }
                                this.emitLatestData(step.name)
                            }
                        }
                    }
                }
            },
            completed: false,
            currentStep: null,
            stepNumber: 0,
            formData: {},
            formSteps: this.steps
        }
    },
    created() {
        if(this.steps && this.steps.length) {
            this.currentStep = { ...this.formSteps[this.stepNumber] };
        }
    },
    computed: {
        backProps() {
            let props;
            if (typeof (this.backButton) == 'string') {
                props = {
                    label: this.backButton,
                }
            } else {
                props = this.backButton || {}
            }
            return {
                theme: 'Bootstrap',
                buttonType: 'button',
                label: 'Back',
                ... props
            };
        },
        nextProps() {
            let props;
            if (typeof (this.nextButton) == 'string') {
                props = {
                    label: this.nextButton,
                }
            } else {
                props = this.nextButton || {}
            }
            return {
                theme: 'Bootstrap',
                buttonType: 'submit',
                label: 'Continue',
                ... props
            };
        }
    },
    methods: {
        emitLatestData(fieldName) {
            this.$emit('update', { 
                fieldName, 
                data: this.formData
            });
        },  
        submitForm() {
            this.$emit('onSubmit', this.formData);
        },
        onAnswer(event) {
            let value;
            if(this.currentStep.type == 'dropdown') {
                value = this.currentStep.multiple? event : event[0];
            } else if(this.currentStep.type == 'longText') {
                value = event;
            } else {
                value = this.currentStep.type=='checkbox' ? event.target.checked : event.target.value;
            }
            this.formSteps[this.stepNumber].value = value;
        },
        changeStep(number) {
            if(this.currentStep) {
                this.formData[this.currentStep.name || this.currentStep.id] = this.formSteps[this.stepNumber].value;
            }
            this.stepNumber = number;
            this.currentStep = { ...{}, ...this.formSteps[this.stepNumber] };
            if(this.stepNumber<this.steps.length) {
                this.completed = false;
                this.$emit('onStep', number);
            } else {
                this.completed = true;
                this.currentStep = null;
                this.$emit('onComplete', this.formData)
            }
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
