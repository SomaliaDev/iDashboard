<template>
<div>
    <div class="row wrapper border-bottom white-bg page-heading">
        <div class="col-sm-4">
            <h2>This is main title</h2>
            <ol class="breadcrumb">
                <li>
                    <a href="index.html">This is</a>
                </li>
                <li class="active">
                    <strong>Breadcrumb</strong>
                </li>
            </ol>
        </div>
    </div>
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>权限管理</h5>
                    </div>
                    <div class="ibox-content">
                        <div class="table-responsive">
                          <el-table
                          :data="tableData"
                          border
                          style="width: 100%">
                          <el-table-column
                            prop="id"
                            label="ID"
                            min-width="150">
                          </el-table-column>
                          <el-table-column
                            prop="name"
                            label="名称"
                            min-width="120">
                          </el-table-column>
                          <el-table-column
                            prop="slug"
                            label="权限"
                            min-width="120">
                          </el-table-column>
                          <el-table-column
                            prop="description"
                            label="描述"
                            min-width="300">
                          </el-table-column>
                          <el-table-column
                            prop="created_at"
                            label="创建时间"
                            min-width="120">
                          </el-table-column>
                          <el-table-column
                            prop="updated_at"
                            label="修改时间"
                            min-width="120">
                          </el-table-column>
                          <el-table-column
                            inline-template
                            fixed="right"
                            label="操作"
                            min-width="100">
                            <span>
                              <el-button type="text" size="small">查看</el-button>
                              <el-button type="text" size="small">编辑</el-button>
                            </span>
                          </el-table-column>
                        </el-table>
                        <div class="pull-right m-t-md">
                          <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="tablePagination.current"
                            :page-sizes="[10, 25, 50, 100]"
                            :page-size="tablePagination.size"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="tablePagination.total">
                          </el-pagination>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      tablePagination: {
        current: 1,
        size: 10,
        total: 0
      }
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('/api/permission?current='+this.tablePagination.current+'&size='+this.tablePagination.size).then((response) => {
        this.tableData = response.data.data
        this.tablePagination.total = response.data.recordsTotal
      }, (response) => {
        this.$message.error('哪里出错啦！');
      })
    },
    handleSizeChange(val) {
      this.tablePagination.size = val
    },
    handleCurrentChange(val) {
      this.tablePagination.current = val
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
