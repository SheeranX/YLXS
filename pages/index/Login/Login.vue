<template>
    <div>
      <!--背景图-->
      <div class="background-img">
          <!--登录表单-->
        <div class="login-form">
          <Form ref="formInline" :model="formInline" :rules="ruleInline" >
            <h2>用户登录</h2>
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
              <Icon type="md-person"  slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="请输入密码">
              <Icon type="ios-lock"  slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="code">
              <Input type="text" v-model="formInline.code" placeholder="请输入右侧验证码">
              <Icon type="md-text"  slot="prepend"></Icon>
              </Input>
            </FormItem>
            <div class="item">
              <input type="checkbox" /><span>记住用户名</span>
              <a href="#">忘记密码？</a>
            </div>
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
</template>

<script>

import {login} from '~/assets/scripts/api.js'

  export default {
    name: "Login",
    data () {
      return {
        formInline: {
          user: '',
          password: '',
          code:''
        },
        ruleInline: {
          user: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
          ],
          code: [
            { required: false, message: '请输入验证码', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            let params = {
              username:this.formInline.user,
              password:this.formInline.password
            }

            login(params).then((res)=>{
              //console.log(res);
              this.$router.push({name:'main'});
            }).catch(error=>{
              console.log(error);
            })
          }
          else {
           this.$Notice.error({
              title: '请输入正确用户名或密码',
            });
          }
        })
      }
    }
  }
</script>

<style scoped>
  .background-img{
    background:url("/assets/images/beij.jpg") no-repeat;
    background-size:100% 100%;  
    background-attachment: fixed;
    position: absolute;
    top: 0px;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
  .login-form{
    position: absolute;
    width: 350px;
    height: 400px;
    top: 50%;
    right: 10%;
    transform: translateY(-60%);
    border-radius: 5px;
    background: #ffffff;
  }
  Form{
    width: 300px;
    margin: 0 auto;
  }
  h2{
    text-align: center;
    margin-bottom: 35px;
    margin-top: 30px;
  }
  Form Input{
    height: 50px;
    line-height: 50px;
  }
  .item{
    height: 50px;
    line-height: 50px;
  }
  .item input{
    float: left;
    margin: 0 10px;
  }
  .item span{
    float: left;
  }
  .item a{
    float: right;
    color: #009eb0;
  }
  Button{
    width: 100%;
    background: #009eb0;
    color: #ffffff;
    margin-top: 30px;
  }
  Button:hover{
    background: #009eb0;
  }
</style>
