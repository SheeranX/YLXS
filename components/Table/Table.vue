<template>
 <div>
    <Table border :columns="column" :data="data"></Table>
    <Page :total="page.recordCount" @on-change='_changePage' :page-size='page.pageSize' show-total show-elevator/>
 </div>
</template>
<script>
    export default {
        data () {
            return {
                column:[],
                data: this.tData,
                title:this.tTitle, 
                page:this.tPage,
                editForm:{},
                keyArr:[],
            }
        },
        methods:{
            createCol(){
                //表格基础配置
                let actions = {
                    title:'操作',
                    key:'action',
                    align:'center',
                    render:(h,params)=>{
                        return h('div',[
                            h('Button',{
                                props:{
                                    type:'primary',
                                    size:'small',
                                },
                                style:{
                                    marginRight:'5px'
                                },
                                on:{
                                    click:()=>{
                                        this._show(params.index)
                                    }
                                }
                            },'查看'),
                            h('Button',{
                                props:{
                                    type:'primary',
                                    size:'small',
                                },
                                style:{
                                    marginRight:'5px',
                                },
                                on:{
                                    click:()=>{
                                        this._edit(params)
                                    }
                                }
                            },'编辑'),
                            h('Button',{
                                props:{
                                    type:'primary',
                                    size:'small',
                                },

                                style:{
                                    marginRight:'5px'
                                },
                                on:{
                                    click:()=>{
                                        this._delete(params.index)
                                    }
                                }
                            },'删除')
                        ])
                    }
                }
                //获取对象的key集合
                let arr = Object.keys(this.data[0]);
                this.keyArr = arr;
                let len = arr.length;
                let newCol = [];
                let formData = [];
                for(let i =0;i<len;i++)
                {
                    let obj = {},form={};


                    obj['title'] = this.title[i];
                    obj['key']  = arr[i];
                    obj['render'] = (h,params)=>{     
                        return h('div',[
                            h('span',params.row.name)
                        ])
                    }
                    newCol.push(obj);
                }
                newCol.push(actions);
                this.column = newCol;
               // console.log(newCol);
            },
            handleSubmit(){
                console.log('handle');
            },
            _edit(params){
                this.$emit('edit',params);
                let row = params.row,index = params.index;
            },
            _delete(idx){
                this.$emit('delete',idx);
            },
            _show(idx){
                this.$emit('show',idx);
            },
            _changePage(pageNum){
                this.$emit('onChangePage',pageNum)
            }
        },
        mounted() {
            this.createCol();
        },
        props:{
            tData:Array,
            tTitle:Array,
            tPage:Object
        },
        watch:{
           tData:function(){
               this.data = this.tData;
           },
           tTitle:function(){
               this.title = this.tTitle;
           }
        }
    }
</script>
