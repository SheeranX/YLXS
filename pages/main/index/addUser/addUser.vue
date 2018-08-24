<template>
    <div class="addUser">
      <div>
        <span>主管单位：</span>
        <Select  style="width:230px">
          <Option value="beijing">技术部</Option>
          <Option value="shanghai">技术部</Option>
          <Option value="shenzhen">技术部</Option>
        </Select>
      </div>
      <div>
        <span>工作单位：</span>
        <Select style="width:230px">
          <Option value="beijing">私营企业</Option>
          <Option value="shanghai">私营企业</Option>
          <Option value="shenzhen">私营企业</Option>
        </Select>
      </div>
      <div>
        <span>用户姓名：</span>
        <Input style="width: 230px;border-radius: 3px;" />
      </div>
      <div>
        <span>登录账号：</span>
        <Input style="width: 230px;border-radius: 3px" />
      </div>
      <div>
        <span>初始密码：</span>
        <Input style="width: 150px;border-radius: 3px" />
        <a href="#" style="color: #22a198;text-decoration: underline;margin-left: 35px">重置密码</a>
      </div>
      <div>
        <span>用户角色：</span>
        <Select style="width:230px">
          <Option value="beijing">普通用户</Option>
          <Option value="shanghai">普通用户</Option>
          <Option value="shenzhen">普通用户</Option>
        </Select>
      </div>
      <div>
        <span>证件类型：</span>
        <Select style="width:230px">
          <Option value="beijing">身份证</Option>
          <Option value="shanghai">身份证</Option>
          <Option value="shenzhen">身份证</Option>
        </Select>
      </div>
      <div>
        <span>证件号码：</span>
        <Input style="width: 230px;border-radius: 3px;" />
      </div>
      <div>
        <span>电子邮箱：</span>
        <Input style="width: 230px;border-radius: 3px" />
      </div>
      <div>
        <span>手机号码：</span>
        <Input style="width: 230px;border-radius: 3px;" />
      </div>
      <div>
        <span>用户来源：</span>
        <Input style="width: 230px;border-radius: 3px;" />
      </div>
      <div>
        <span style="margin-left: 32px">状态：</span>
        <RadioGroup v-model="state">
          <Radio label="启用" style="margin-right: 50px;margin-left: 5px"></Radio>
          <Radio label="停用"></Radio>
        </RadioGroup>
      </div>
      <div>
        <button  class="btn-save">保存</button>
        <button  class="btn-return">返回</button>
      </div>
    </div>

</template>

<script>
    export default {
        name: "addUser",
      data () {
        return {
          state:"启用"
        }
      }
    }
</script>

<style scoped>
  .addUser{
    margin-top: 30px;
    margin-left: 15px;
  }
  .addUser div{
    margin-bottom: 10px;
  }
 button{
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
  }
  .btn-save{
    margin-right: 72px;
    background: #1cc9c4;
  }
  .btn-return{
    background: #f9ac50;
  }
  span{
    font-size: 16px;
    color: #4b4b4b;
    margin-right: 5px;
  }
</style>
