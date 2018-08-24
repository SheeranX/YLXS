<template>
    <div>
        <Tabs value="name1">
            <TabPane label="编号管理" name="numManager">
            </TabPane>
        </Tabs>
        <Row  class-name='max-width' :gutter="16">
            <Col span='24'>
                 <Form ref='formInline' :model="formInline"  :label-width="80">
                   <Row>
                       <Col span="10">
                           <FormItem prop='sequenceName' label="序列号名称">
                             <Input type="text" v-model="formInline.sequenceName" placeholder="序列号名称"></Input>
                           </FormItem> 
                       </Col>
                       <Col span="10" offset='2'>
                         <FormItem prop="sequenceFlag" label="清空标志">
                            <RadioGroup v-model="formInline.sequenceFlag">
                                <Radio label="Y">是</Radio>
                                <Radio label="N">否</Radio>
                            </RadioGroup>
                        </FormItem>
                       </Col>
                   </Row>
                   <Row>
                       <Col span="10">
                            <FormItem prop='sequenceValue' label="编号类型">
                                <Select v-model="formInline.sequenceValue">
                                    <Option value="TABLE_ID_NO">表ID生成序号</Option>
                                    <Option value="NO">编号对应的序号</Option>
                                </Select>
                            </FormItem>
                       </Col>
                       <Col span="10" offset='2'>
                            <FormItem prop='remark' label="备注">
                                <Input type="text" v-model="formInline.remark" placeholder="备注"></Input>
                            </FormItem>
                       </Col>
                   </Row>
                   <Row>
                       <Col span="10"> 
                            <FormItem prop='sequenceId' label="种子服务器">
                                <Input type="text" v-model="formInline.sequenceId" placeholder="种子服务器"></Input>
                            </FormItem>
                       </Col>
                   </Row>
                    <FormItem>
                         <Button type="primary" @click="findSequence">查询</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
         <Row>
            <Col :md='{span:8,offset:16}' :sm="{span:12,offset:12}" class-name="txt-align-right inner-space">
                <Button type="primary" @click="addNum">添加编号</Button>&nbsp;
                <Button type="primary" @click="addSever">增加服务器编号</Button>
            </Col>
        </Row>
        <Row>
            <Col span='24'>
               <Table border :columns="columns" :data="listData" height='520px'></Table><br>
               <Page :total="page.recordCount" @on-change='changePage' :page-size='page.pageSize' show-total show-elevator/>
            </Col>
        </Row>
         <Modal footer-hide
            v-model="isAddNum"
            title="添加编号"
          >
           <Form :model="formNum" class="inner-space">
               <FormItem prop='sequenceName' label="序列号名称" :label-width="80">
                   <Input type="text" v-model="formNum.sequenceName" placeholder="序列号名称"></Input>
               </FormItem>
                <FormItem prop='sequenceValue' label='键值' :label-width='80'>
                   <Input type="text" v-model="formNum.sequenceValue" placeholder="请输入键值"></Input>
               </FormItem>
                <FormItem prop='isClearNum' label='清空序列号' :label-width='80'>
                     <RadioGroup v-model="formNum.sequenceFlag">
                        <Radio label="Y">是</Radio>
                        <Radio label="N">否</Radio>
                    </RadioGroup>
               </FormItem>
                <FormItem prop='sequenceFlag' label='编号类型' :label-width='80'>
                   <Select v-model="formNum.sequenceFlag">
                        <Option value="Y">表ID生成序号</Option>
                        <Option value="N">编号对应的序号</Option>
                    </Select>
               </FormItem>
               <FormItem prop='remark' label="备注" :label-width="80">
                   <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="formNum.remark"></Input>
               </FormItem>
                <FormItem prop='sql' label="获取sql" :label-width="80">
                   <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="formNum.sql"></Input>
               </FormItem>
               <FormItem :label-width="80">
                   <Button type="primary" @click="confirmAdd">保存</Button>
               </FormItem>
           </Form>
        </Modal>
         <Modal footer-hide
            v-model="isAddServer"
            title="添加服务器编号"
          >
           <Form :model="formServer" class="inner-space">
               <FormItem prop='name' label="序列号名称" :label-width="80">
                   <Input type="text" v-model="formServer.name" placeholder="序列号名称"></Input>
               </FormItem>
                <FormItem prop='keyVal' label='键值' :label-width='80'>
                   <Input type="text" v-model="formServer.keyVal" placeholder="请输入键值"></Input>
               </FormItem>
                <FormItem :label-width="80">
                   <Button type="primary">保存</Button>
               </FormItem>
           </Form>
        </Modal>
         <Modal footer-hide
            v-model="isEdit"
            title="编辑"
          >
           <Form :model="editSeq" class="inner-space">
               <FormItem prop='sequenceName' label="序号名" :label-width="80">
                   <Input type="text" v-model="editSeq.sequenceName" placeholder="序号名"></Input>
               </FormItem>
                <FormItem prop='sequenceServerId' label='键值' :label-width='80'>
                   <Input type="text" v-model="editSeq.sequenceServerId" placeholder="请输入序号值"></Input>
               </FormItem>
               <FormItem prop='isClear' label='清空序列号' :label-width='80'>
                   <RadioGroup v-model="editSeq.sequenceFlag">
                        <Radio label="Y">是</Radio>
                        <Radio label="N">否</Radio>
                    </RadioGroup>
               </FormItem>
                <FormItem prop='noType' label='编号类型' :label-width='80'>
                   <Select v-model="editSeq.noType">
                        <Option value="TABLE_ID_NO">表ID生成序号</Option>
                        <Option value="NO">编号对应的序号</Option>
                    </Select>
               </FormItem>
               <FormItem prop='seedServer' label='种子服务器' :label-width='80'>
                   <Input type="text" v-model="editSeq.seedServer" placeholder="请输入序号值"></Input>
               </FormItem>
                <FormItem prop='remark' label="备注" :label-width="80">
                   <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="editSeq.remark"></Input>
               </FormItem>
                <FormItem prop='sql' label="获取sql" :label-width="80">
                   <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" v-model="editSeq.maxNumberSql"></Input>
               </FormItem>
                <FormItem :label-width="80">
                   <Button type="primary" @click="editConfirm">保存</Button>
               </FormItem>
           </Form>
        </Modal>
        <!-- <NewTable 
            @edit='onEdit' 
            @delete='onDelete' 
            @show='onShow' 
            @onChangePage='onPage'
            :tData="dataT" 
            :tTitle='title'
            :tPage='page'>
         </NewTable> -->
    </div>    
</template>
<script>
import NewTable from '~/components/Table/Table.vue'
import NewModal from '~/components/Modal/Modal.vue';
import  {getCodeList,addSeqInfo,updateSeqInfo,deleteSeqInfo,findSequenceBySequenceId}  from "~/assets/scripts/api.js";
    export default {
        asyncData(){
          let page = {
            pageSize:10,
            targetPage:1
          }
          return  getCodeList(page)
            .then(res=>{
                console.log(res)
                return {listData:res.data.rows,page:res.data.page}
            })
            .catch(error=>{
                console.log(error);
            })
        },
        components:{
            NewTable,
        },
        data(){
            return {
                title:['姓名','年龄','地址','日期'],
                dataT:[
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ],
                listData:[],
                formNum:{
                    sequenceName:'',
                    sequenceValue:'',
                    sequenceFlag:'Y',
                    numType:'',
                    remark:'',
                    maxNumberSql:''
                },
                formServer:{
                    name:'',
                    keyVal:''
                },
                isAddNum:false,
                isAddServer:false,
                isEdit:false,
                formInline:{
                    sequenceName:'',
                    sequenceFlag:'Y',
                    sequenceValue:'',
                    remark:'',
                    sequenceServerId:''
                },
                editSeq:{
                    sequenceName:"",
                    sequenceServerId:'',
                    sequenceValue:'',
                    sequenceFlag:'Y',
                    sequenceId:'',
                    seedServer:"",
                    remark:'',
                    sql:''
                },
                columns: [
                    {
                        title: 'ID',
                        key: 'sequenceId',
                        fixed: 'left'
                    },
                    {
                        title: '序号名',
                        key: 'sequenceName',
                    },
                    {
                        title: '序号值',
                        key: 'sequenceValue',
                    },
                   {
                        title: "开关",
                        key: "flag",
                        align: "center",
                        render: (h, params) => {
                            return h("div", [
                            h(
                                "i-switch",
                                {
                                props: {
                                    value: this.listData[params.index].sequenceFlag == "Y" ? true : false,
                                    size: "large",
                                    disabled:true
                                },
                                on: {
                                    "on-change": status => {
                                        this.listData[params.index].sequenceFlag = status ? "Y" : "N";
                                        this.switchBtn(params.index);
                                    }
                                }
                                },
                                [
                                h(
                                    "span",
                                    {
                                    slot: "open"
                                    },
                                    "开启"
                                ),
                                h(
                                    "span",
                                    {
                                    slot: "close"
                                    },
                                    "关闭"
                                )
                                ]
                            )
                            ]);
                        }
                        },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click:()=>{
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click:()=>{
                                            this.edit(params.index)
                                        }
                                    }
                                }, '编辑'),
                                 h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                     on:{
                                        click:()=>{
                                            this.delete(params.index)
                                        }
                                    },
                                }, '删除'),
                            ]);
                        }
                    }
                ],
                item: [],
                page:{
                  pageCount:0,
                  pageSize:10,
                  recordCount:0,
                  targetPage:1
                }
            }
        },
        methods:{
            //添加编号方法
            addNum(){
                this.isAddNum = true;
            },
            //添加服务器编号
            addSever(){
                this.isAddServer = true
            },  
            //添加编号保存按钮
            confirmAdd(){
                let paras = {
                    sequenceName:this.formNum.sequenceName,
                    sequenceValue:this.formNum.sequenceValue,
                    sequenceFlag:this.formNum.sequenceFlag,
                    maxNumberSql:this.formNum.sql,
                    remark:this.formNum.remark,
                };

                addSeqInfo(paras)
                .then(res=>{
                    this.isAddNum = false;
                    console.log(res)
                     let params = {
                        targetPage:this.page.targetPage,
                        pageSize:this.page.pageSize
                    }
                    return getCodeList(params)
                })
                 .then(res=>{
                    this.listData = res.data.rows
                    //console.log(res);
                })
                .catch(error=>{
                    console.log(error);
                })
            },
            show(index){
                this.$Modal.info({
                    title:'序号信息',
                    content:`ID:${this.listData[index].sequenceId}<br>
                             序号名:${this.listData[index].sequenceName}<br>
                             序号值:${this.listData[index].sequenceServerId}<br>
                             标记:${this.listData[index].sequenceFlag}`
                })
            },
            edit(index){
                this.isEdit = true;
                this.editSeq = {
                    sequenceName:this.listData[index].sequenceName,
                    sequenceServerId:this.listData[index].sequenceServerId,
                    sequenceValue:this.listData[index].sequenceValue,
                    sequenceFlag:this.listData[index].sequenceFlag,
                    sequenceId:this.listData[index].sequenceId,
                    remark:'',
                    maxNumberSql:''
                }
            },
            editConfirm(){
                let paras = {
                    sequenceName:this.editSeq.sequenceName,
                    sequenceServerId:this.editSeq.sequenceServerId,
                    sequenceValue:this.editSeq.sequenceValue,
                    sequenceFlag:this.editSeq.sequenceFlag,
                    sequenceId:this.editSeq.sequenceId,
                    maxNumberSql:this.editSeq.maxNumberSql,
                    remark:this.editSeq.remark

                }

                updateSeqInfo(paras)
                .then(res=>{
                    console.log(res);
                })
                .catch(error=>{
                    console.log(error)
                })

            },
            switchBtn(index){   
                console.log(index);
            },
            changePage(pageNum){
                this.page.targetPage = pageNum;
                let params = {
                    targetPage:pageNum,
                    pageSize:this.page.pageSize
                }
                getCodeList(params)
                .then(res=>{
                    console.log(res);
                    this.listData = res.data.rows;
                })
                .catch(error=>{
                    console.log(error)
                })
               // console.log(page);
            },
            delete(index){
                let params = {
                    ids:this.listData[index].sequenceId
                }
                deleteSeqInfo(params)
                .then(res=>{
                    this.page.recordCount--;
                    this.listData.splice(index,1);
                })
                .catch(error=>{
                    console.log(error);
                })
            },
            findSequence(){
                let params = {
                    sequenceName:this.formInline.sequenceName,
                    sequenceServerId:this.formInline.sequenceServerId,
                    //sequenceValue:this.formInline.sequenceValue,
                   // sequenceFlag:this.formInline.sequenceFlag,
                    remark:this.formInline.remark,
                }
                findSequenceBySequenceId(params)
                .then(res=>{
                    console.log(res);
                })
                .catch(error=>{
                    console.log(error)
                })
            },
            onEdit(idx){
                console.log(idx);
            },
            onDelete(idx){
                console.log(idx);
            },
            onShow(idx){
                console.log(idx);
            },
            onPage(num){
                console.log(num);
            }
        }
    }
</script>
<style scoped lang='less'>
    .max-width{
        max-width: 1000px;
    }
</style>

 