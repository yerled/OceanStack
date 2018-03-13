<template>
  <div id="overview">
    <!-- 欠费提示 -->
    <el-row v-if="balance < 0">
      <el-card class="tips" :body-style="tipstyle">
        该项目的扣费账户［{{username}}］已欠费，请充值或联系该项目支付者［{{username}}］。
      </el-card>
    </el-row>
    <!-- 账户余额 -->
    <el-row>
      <el-card>
        <div>
          <span>
            账户余额：<Money class="balance" :money="balance"/> 元
          </span>
          <el-button style="margin: 0 80px 0 30px;padding: 0;" type="text">查询</el-button>
          <span>
            当前账户消费预估：<Money :money="account_comsume_daily"/> 元/天
          </span>
        </div>
      </el-card>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="9">
        <!-- 项目消费信息 -->
        <el-card class="project_comsume">
          <div slot="header">
            <span>当前项目每天消费: <Money class="main" :money="estimate.total_price"/> 元</span>
            <span class="tip">(仅按需计费资源)</span>
          </div>
          <div class="card_body clearfix" v-if="estimate.summaries && estimate.summaries.length">
            <div  class="item" v-for="(e, i) in estimate.summaries" v-if="isDemandResource(e)" :key="i">
              <span class="resource">{{$t(`resource.${e.order_type}`)}} ({{e.total_count}})</span>
              <span class="price"><Money :money="e.total_price"></Money> 元</span>
            </div>
          </div>
        </el-card>
        <!-- 项目信息 -->
        <el-card class="project_info">
          <div slot="header">
            <span>项目信息</span>
          </div>
          <div class="card_body">
            <div>
              <label>项目所有者:</label>{{project_owner.name}}
            </div>
            <div>
              <label>账单支付者:</label>{{billing_owner.name}}
            </div>
            <div class="delimiter"></div>
            <div class="role">
              <label>我的角色:</label>
              <span style="display: inline-block">
                <div>
                  <el-tooltip placement="right">
                    <div slot="content">为项目产生的费用<br/>支付账单</div>
                    <span>账单支付者<i class="el-icon-question"></i></span>
                  </el-tooltip>
                </div>
                <div>
                  <el-tooltip placement="right">
                    <div slot="content">拥有项目的人员管理和<br/>所有项目管理权限</div>
                    <span>项目所有者<i class="el-icon-question"></i></span>
                  </el-tooltip>
                </div>
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="15">
        <!-- 资源配额 -->
        <el-card class="quotas">
          <div slot="header" class="clearfix">
            <span>资源配额</span>
            <el-button style="float: right; padding: 3px 0" type="text">申请配额</el-button>
          </div>
          <div class="card_body clearfix">
            <div class="item" v-for="el in quotas" :key="el.subType">
              <div class="resource">
                <span>{{el.subType}} (个)</span>
                <span class="progress">{{el.used}}/{{el.limit}}</span>
              </div>
              <div class="progressG">
                <el-progress class="quotaProgress" :stroke-width="15" :percentage="getPercent(el.used, el.limit)"
                    :status="getStatus(el.used, el.limit)"></el-progress>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
@import '../../styles/variable.less';

#overview {
  .el-card {
    margin-bottom: 10px;
    &.tips {
      border: 1px solid @color_error_border;
      background-color: @color_error_background;
    }
    &.project_comsume {
      .tip {
        font-size: @fontsize_supplementary_text;
        color: @color_supplementary_text;
      }
      .item {
        float: left;
        padding: 5px 15px;
        box-sizing: border-box;
        width: 50%;
        transition: 0.25s;
        cursor: pointer;
        &:nth-child(odd) {
          border-right: 1px solid @color_boundary;
        }
        &:hover {
          background-color: #C1F4F7;
        }
        .price {
          float: right;
          text-align: right
        }
      }
    }
    &.project_info {
      line-height: 24px;
      .delimiter {
        width: 100%;
        margin: 8px 0;
        border-bottom: 1px solid @color_boundary;
      }
      .role {
        display: flex;
      }
      label {
        color: @color_supplementary_text;
      }
    }
    &.quotas {
      .item {
        width: 50%;
        float: left;
        margin: 10px 0;
        .resource {
          padding-bottom: 5px;
        }
        .progress {
          float: right;
          margin-right: 50px;
        }
      }
    }
    .card_body {
      font-size: @fontsize_supplementary_text;
    }
  }
}
</style>

<script>
import {mapState} from 'vuex'

export default {
  name: 'overview',
  data () {
    return {
      tipstyle: {
        padding: '10px 20px',
      },
      balance: -1000,
      account_comsume_daily: 200,
      estimate: [],
      quotas: [],
      project_owner: {
        name: 'develop_test_user',
      },
      billing_owner: {
        name: 'develop_test_user',
      },
    }
  },
  methods: {
    isDemandResource: function (resource) {
      return resource.total_count > 0
    },
    getPercent: function (used, limit) {
      return Number.parseInt(used / limit * 100)
    },
    getStatus: function (used, limit) {
      let percent = this.getPercent(used, limit)
      if (percent > 80) {
        return 'exception'
      } else if (percent < 30) {
        return 'success'
      }
    },
  },
  components: {

  },
  computed: {
    ...mapState({
      username: state => state.user.name,
    }),
  },
  mounted: function () {
    /* eslint-disable */
    this.estimate = {
      "total_count": 31,
      "total_price": "51.9024",
      "summaries": [
        {
            "total_count": 8,
            "total_price": "41.9184",
            "order_type": "instance"
        },
        {
            "total_count": 7,
            "total_price": "2.4000",
            "order_type": "image"
        },
        {
            "total_count": 2,
            "total_price": "0.2400",
            "order_type": "snapshot"
        },
        {
            "total_count": 9,
            "total_price": "6.1440",
            "order_type": "volume"
        },
        {
            "total_count": 4,
            "total_price": "0.0000",
            "order_type": "router"
        },
        {
            "total_count": 0,
            "total_price": "0.0000",
            "order_type": "listener"
        },
        {
            "total_count": 1,
            "total_price": "1.2000",
            "order_type": "floatingip"
        },
        {
            "total_count": 0,
            "total_price": "0.0000",
            "order_type": "alarm"
        },
        {
            "total_count": 0,
            "total_price": "0.0000",
            "order_type": "share"
        },
        {
            "total_count": 0,
            "total_price": "0.0000",
            "order_type": "highway"
        }
      ]
    }
    let quotas = {
      "compute": {
          "instances": {
              "used": 4,
              "limit": 60
          },
          "ram": {
              "used": 24576,
              "limit": 1024000
          },
          "key_pairs": {
              "used": 4,
              "limit": 100
          },
          "cores": {
              "used": 13,
              "limit": 100
          }
      },
      "region_name": "RegionOne",
      "database": null,
      "volume": [
          {
              "gigabytes": {
                  "used": 10,
                  "limit": 5000
              },
              "volumes": {
                  "used": 1,
                  "limit": 10
              },
              "snapshots": {
                  "used": 0,
                  "limit": 10
              },
              "volume_type": "sata"
          },
          {
              "gigabytes": {
                  "used": 140,
                  "limit": 1000
              },
              "volumes": {
                  "used": 8,
                  "limit": 20
              },
              "snapshots": {
                  "used": 2,
                  "limit": 20
              },
              "volume_type": "ssd"
          }
      ],
      "user_id": "a5020eebb22247289d0c4e41fbcb2f8e",
      "project_id": "5d92506dfc0a4289aef1b375480020c4",
      "network": {
          "subnet": {
              "used": 6,
              "limit": 20
          },
          "network": {
              "used": 5,
              "limit": 20
          },
          "floatingip": {
              "used": 1,
              "limit": 20
          },
          "listener": {
              "used": 0,
              "limit": 10
          },
          "pool": {
              "used": 0,
              "limit": 10
          },
          "security_group": {
              "used": 3,
              "limit": 10
          },
          "router": {
              "used": 4,
              "limit": 20
          },
          "loadbalancer": {
              "used": 0,
              "limit": 10
          }
      }
    }
    /* eslint-disable */
    let quotasArr = []
    function pushQuotas(quotas, type) {
      if (quotas && type) {
        for (let key in quotas) {
          let obj = quotas[key]
          obj.type = type
          obj.subType = key
          quotasArr.push(obj)
        }
      }
    }
    function pushVolumeQuotas(quotas) {
      
    }
    ['compute', 'network', 'database'].forEach( e => {
      pushQuotas(quotas[e], e, )
    })
    this.quotas = quotasArr
  },
  beforeDestory: function () {
    alert('beforeDestroy')
  },
}
</script>
