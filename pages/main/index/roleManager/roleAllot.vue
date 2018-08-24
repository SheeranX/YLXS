<template>
  <div>
    <Tabs value="roleAllot" :animated="false">

      <TabPane label="权限分配" name="roleAllot">
        <Row>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <h3>角色列表:</h3>
            <Table width="550" border :columns="columns" :data="data"></Table>
          </Col>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <Tabs :animated="false">
              <TabPane label="角色用户">
                <Table :columns="columnsRole" :data="dataRole" class="userRole" border></Table>
              </TabPane>
              <TabPane label="角色权限">
                <Tree :data="treesData" show-checkbox></Tree>
              </TabPane>

            </Tabs>
          </Col>
        </Row>
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
      </TabPane>
      <TabPane label="用户特权" name="userPrivil">
        <Row>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <h3>用户列表:</h3>
            <Table width="550" border :columns="columnsUser" :data="dataUser"></Table>
          </Col>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <Tabs :animated="false">
              <TabPane label="用户特权">
                <Tree :data="treesData" show-checkbox></Tree>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </TabPane>
      <TabPane label="查询权限" name="queryRoles">
        <Row>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <h3>用户列表:</h3>
            <Table width="550" border :columns="columnsUser" :data="dataUser"></Table>
          </Col>
          <Col :xs="{span:24}" :sm="{span:24}" :md="{span:12}">
            <Tabs :animated="false">
              <TabPane label="用户特权">
                <Tree :data="treesData" show-checkbox></Tree>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: "roleAllot",
    data() {
      return {
        // 修改用户对话框，默认false
        ModifyUserModal: false,
        modifyRow: [],
        // 权限分配
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


        //权限分配=>角色用户
        columnsRole: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '用户姓名',
            key: 'userName',
            align: 'center',
          }, {
            title: '登录账号',
            key: 'loginAccount',
            align: 'center',
          }, {
            title: '用户角色',
            key: 'userRole',
            align: 'center',
          }
        ],
        dataRole: [
          {
            userName: '天涯营销部总监',
            loginAccount: '',
            userRole: '天涯营销部总监'
          }
        ],
        //权限分配=>角色权限Tree
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
        ],

        //用户特权=>用户列表
        columnsUser: [
          {
            title: '用户姓名',
            key: 'userName',
            align: 'center',
          },
          {
            title: '登录账号',
            key: 'loginAccount',
            align: 'center',
          }
        ],
        dataUser: [
          {
            userName: '超级管理员',
            loginAccount: 'administrator'
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
      // 修改对话框提交按钮
      ModifyUserSubmit() {

      },
      // 修改对话框取消按钮
      ModifyUserCancle() {

      }
    }
  }
</script>

<style scoped>
  .userRole {
    margin-right: 20px;
  }
</style>
