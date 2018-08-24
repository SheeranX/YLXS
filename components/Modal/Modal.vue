<template>
    <div>
        <Modal
            v-model="isShow" footer-hide
            title="Common Modal dialog box title">
             <Form ref="formCustom" :model="formCustom" :rules="ruleValidate" :label-width="80">
                <FormItem label="标题" prop="title">
                    <Input type="text" v-model="formCustom.title"></Input>
                </FormItem>
                 <FormItem>
                    <Button type="primary" @click="submit('formCustom')">保存</Button>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data(){
             return {
                isShow: true,
                formCustom:{
                    title:''
                },
                ruleValidate:{
                    title:[
                        {required:true,message:'此项必填',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submit(name){
               this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
    }
</script>

