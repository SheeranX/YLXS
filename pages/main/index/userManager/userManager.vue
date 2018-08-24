
<template>
  <div>
    <!--查询表单-->
    <Form ref="form" :model="form" :rules="ruleForm" label-position="left" :label-width="70" inline>
      <FormItem label="用户姓名:">
        <Input type="text" v-model="form.userName" placeholder="Username"></Input>
      </FormItem>
      <FormItem label="登录账号:">
        <Input type="text" v-model="form.loginAccount" placeholder="登录账号"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('form')">查询</Button>
      </FormItem>
    </Form>
    <!--查询表单结束-->
    <hr>
    <!--添加用户按钮-->
    <Button type="info" class="addBtn" @click="addBtn()">添加用户</Button>
    <br/>
    <!--添加用户对话框-->
    <Modal
      v-model="addUserModal"
      title="添加用户"
      width="616px"
      :styles="{top: '20px'}"
      @on-ok="addUserSubmit('addUserForm')"
      @on-cancel="addUserCancle">
      <Form ref="addUserForm" :model="addUserForm" label-position="left" :label-width="90">
        <FormItem label="用户名" prop="userName">
          <Input v-model="addUserForm.userName" class="inputValue" placeholder="用户名"/>
        </FormItem>
        <FormItem label="登录账号" prop="loginAccount">
          <Input v-model="addUserForm.loginAccount" placeholder="登录账号"/>
        </FormItem>
        <FormItem label="业务类型" prop="busiType">
          <Input v-model="addUserForm.busiType" placeholder="业务类型"/>
        </FormItem>
        <FormItem label="工作单位" prop="workUnit">
          <Input v-model="addUserForm.workUnit" placeholder="工作单位"/>
        </FormItem>
        <FormItem label="用户角色" prop="userRole">
          <Input v-model="addUserForm.userRole" placeholder="用户角色"/>
        </FormItem>
        <FormItem label="用户来源" prop="userSource">
          <Input v-model="addUserForm.userSource" placeholder="用户来源"/>
        </FormItem>
        <FormItem label="最后登录时间" prop="lastLoginTime">
          <Input v-model="addUserForm.lastLoginTime" placeholder="最后登录时间"/>
        </FormItem>
        <FormItem label="最后登录IP" prop="lastLoginIp">
          <Input v-model="addUserForm.lastLoginIp" placeholder="最后登录IP"/>
        </FormItem>
        <FormItem label="状态" prop="status">
          <Input v-model="addUserForm.status" placeholder="状态"/>
        </FormItem>
      </Form>
    </Modal>
    <!--表格内容-->
    <Table border :columns="columns" :data="data" class="tableData"></Table>

    <!--修改对话框-->
    <Modal
      v-model="modifyFormModal"
      title="修改用户信息"
      width="616px"
      :styles="{top: '20px'}"
      @on-ok="addUserSubmit('addUserForm')"
      @on-cancel="addUserCancle">
      <Form  :model="modifyRow" label-position="left" :label-width="90">
        <FormItem label="用户名" prop="userName">
          <Input v-model="modifyRow.userName" class="inputValue" placeholder="用户名"/>
        </FormItem>
        <FormItem label="登录账号" prop="loginAccount">
          <Input v-model="modifyRow.loginAccount" placeholder="登录账号"/>
        </FormItem>
        <FormItem label="业务类型" prop="busiType">
          <Input v-model="modifyRow.busiType" placeholder="业务类型"/>
        </FormItem>
        <FormItem label="工作单位" prop="workUnit">
          <Input v-model="modifyRow.workUnit" placeholder="工作单位"/>
        </FormItem>
        <FormItem label="用户角色" prop="userRole">
          <Input v-model="modifyRow.userRole" placeholder="用户角色"/>
        </FormItem>
        <FormItem label="用户来源" prop="userSource">
          <Input v-model="modifyRow.userSource" placeholder="用户来源"/>
        </FormItem>
        <FormItem label="最后登录时间" prop="lastLoginTime">
          <Input v-model="modifyRow.lastLoginTime" placeholder="最后登录时间"/>
        </FormItem>
        <FormItem label="最后登录IP" prop="lastLoginIp">
          <Input v-model="modifyRow.lastLoginIp" placeholder="最后登录IP"/>
        </FormItem>
        <FormItem label="状态" prop="status">
          <Input v-model="modifyRow.status" placeholder="状态"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    name: "userManager",
    data() {
      return {
        // 添加用户对话框
        addUserModal: false,
        modifyFormModal:false,
        form: {
          userName: '',
          loginAccount: ''
        },
        addUserForm: {
          userName: '',
          loginAccount: '',
          busiType: '',
          workUnit: '',
          userRole: '',
          userSource: '',
          lastLoginTime: '',
          lastLoginIp: '',
          status: ''
        },

        ruleForm: {},
        columns: [
          {
            title: '用户姓名',
            key: 'userName',
            align: 'center',
          }, {
            title: '登录账号',
            key: 'loginAccount',
            align: 'center',
          }, {
            title: '业务类型',
            key: 'busiType'
          }, {
            title: '工作单位',
            key: 'workUnit',
            align: 'center',
          }, {
            title: '用户角色',
            key: 'userRole',
            align: 'center',
          }, {
            title: '用户来源',
            key: 'userSource',
            align: 'center',
          }, {
            title: '最后登录时间',
            key: 'lastLoginTime',
            align: 'center',
          }, {
            title: '最后登录IP',
            key: 'lastLoginIp',
            align: 'center',
          }, {
            title: '状态',
            key: 'status',
            align: 'center',
          }, {
            title: '操作',
            key: 'action',
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('span', {
                  props: {
                    type: 'text',
                  },
                  style: {
                    marginRight: '10px',
                    cursor: 'pointer',
                    color: '#1caab2'
                  },
                  on: {
                    click: () => {
                      this.modify(params.index, params.row)
                    }
                  }
                }, '修改'),
                h('span', {
                  props: {
                    type: 'text',
                  },
                  style: {
                    cursor: 'pointer',
                    color: '#1caab2'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index, params.row);
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data: [
          {
            userName: '张三',
            loginAccount: '',
            busiType: '',
            workUnit: '',
            userRole: '',
            userSource: '',
            lastLoginTime: '2018.10.10 12:00',
            lastLoginIp: '192.168.10.101',
            status: '停用',
          }
        ],
        // 修改用户信息
        modifyRow:{}
      }
    },
    methods: {
      handleSubmit() {

      },
      //添加用户按钮
      addBtn() {
        this.addUserModal = true;
      },
      //添加用户提交按钮
      addUserSubmit(name) {
        this.data.push({
          userName: this.addUserForm.userName,
          loginAccount: this.addUserForm.loginAccount,
          busiType: this.addUserForm.busiType,
          workUnit: this.addUserForm.workUnit,
          userRole: this.addUserForm.userRole,
          userSource: this.addUserForm.userSource,
          lastLoginTime: this.addUserForm.lastLoginTime,
          lastLoginIp: this.addUserForm.lastLoginIp,
          status: this.addUserForm.status,
        });
        //提交完，重置表单
        this.$refs[name].resetFields();
      },
      //添加用户取消按钮
      addUserCancle() {
        this.addUserModal = false;
      },
      // 修改按钮
      modify(index, row) {
        this.modifyFormModal = true;
        console.log(row);
        this.modifyRow = row;

      },
      // 删除按钮
      remove(index, row) {
        console.log(row)
        this.data.splice(index, 1);
      },
    },
  }
</script>
<style lang="less" scoped>
  hr {
    border: none;
   // border-top: 1px solid @color-disabled;
    margin-bottom: 20px;
  }

  // .addBtn {
  //   margin-bottom: 10px;
  //   margin-right: 40px;
  //   .bg-green;
  //   border: 0;
  //   /*float: right;*/
  // }

  .tableData {
    margin-right: 10px;
  }


</style>
<style lang="less">
  // .ivu-table th {
  //   background-color: #e2f8f7;
  // }

  .vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal {
      top: 0;
    }
  }
</style>
