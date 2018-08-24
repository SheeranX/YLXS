<template>
  <div>
    <Row>
      <Col :xs="{span:20}" :sm="{span:20}" :md="{span:12}">
        <!--添加用户按钮-->
        <Button type="info" class="addBtn" @click="addBtn()">添加用户</Button>
        <!--添加用户对话框-->
        <Modal
          v-model="addUserModal"
          title="添加用户"
          @on-ok="addUserSubmit"
          @on-cancel="addUserCancle">
          <Form ref="addUserForm" :model="addUserForm">
            <FormItem label="角色名称">
              <Input v-model="addUserForm.roleName" class="inputValue" placeholder="请输入角色名称"/>
            </FormItem>
            <FormItem label="备注">
              <Input v-model="addUserForm.comment" placeholder="请输入备注"/>
            </FormItem>
          </Form>
        </Modal>

        <Table  border :columns="columns" :data="data"></Table>
        <!--修改对话框-->
        <Modal
          v-model="ModifyUserModal"
          title="修改用户"
          @on-ok="ModifyUserSubmit"
          @on-cancel="ModifyUserCancle">
          <Form>
            <FormItem label="角色名称">
              <Input v-model="modifyRow.roleName" placeholder="请输入角色名称"/>
            </FormItem>
            <FormItem label="备注">
              <Input v-model="modifyRow.comment" placeholder="请输入备注"/>
            </FormItem>
          </Form>
        </Modal>
      </Col>
      <Col :xs="{span:20}" :sm="{span:20}" :md="{span:11,offset: 1}">
        <Tabs :animated="false">
          <TabPane label="角色权限">
            <Tree :data="treesData" show-checkbox></Tree>
            <Button class="saveBtn">保存</Button>
            <Button type="primary" class="cancleBtn">取消</Button>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'roleManage',
    data() {
      return {
        // 添加用户对话框，默认false
        addUserModal: false,
        //添加用户form表单
        addUserForm: {
          roleName: '',
          comment: ''
        },
        // 修改用户对话框，默认false
        ModifyUserModal: false,
        modifyRow: [],
        columns: [
          {
            title: '角色名称',
            key: 'roleName',
            align: 'center',
          },
          {
            title: '备注',
            key: 'comment',
            align: 'center',
          },
          {
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
            roleName: '天涯营销部总监',
            comment: '海角营销部总监',
          },
          {
            roleName: '天涯营销部总监',
            comment: '海角营销部总监',
          }, {
            roleName: '海角营销部总监',
            comment: '',
          }
        ],
        treesData: [
          {
            title: '玉龙雪山工作台',
            expand: true,
            children: [
              {
                title: '用户管理',
                expand: true,
                children: [
                  {
                    title: '用户信息',
                  }, {
                    title: '角色管理'
                  }, {
                    title: '权限管理'
                  }
                ]
              }, {
                title: '合作单位',
                expand: true,
                children: [
                  {
                    title: '旅游景区'
                  }, {
                    title: '旅行社'
                  }, {
                    title: '分销商'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      // 修改按钮
      modify(index, row) {
        console.log(row);
        this.modifyRow = row;
        this.ModifyUserModal = true;

      },
      // 删除按钮
      remove(index, row) {
        console.log(row)
        this.data.splice(index, 1);
      },
      //添加用户按钮
      addBtn() {
        this.addUserModal = true;
      },
      //添加用户提交按钮
      addUserSubmit() {
        this.data.push({
          roleName: this.addUserForm.roleName,
          comment: this.addUserForm.comment
        })
      },
      //添加用户取消按钮
      addUserCancle() {

      },
      // 修改对话框提交按钮
      ModifyUserSubmit() {

      },
      // 修改对话框取消按钮
      ModifyUserCancle() {

      }
    }
  }
</script>
<style lang="less" scoped>
@import url('../../../../assets/styles/global.less');
  .addBtn {
    margin-bottom: 10px;
   // .bg-green;
  }

  .saveBtn {
    margin-top: 55px;
    margin-right: 20px;
    border:0;
    // background-color: @color-primary-light;
   // .white;
    width: @primaryBtn-width;
  }
  .cancleBtn {
    margin-top: 55px;
    // background-color: @color-disabled;
   // .white;
    width: @primaryBtn-width;
    border:0
  }
  .ivu-modal{
    top: 0;
  }
</style>
