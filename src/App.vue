<template>
  <div id="app">
    <div class="content">
      <ul class="router_ul">
        <router-link
          v-for="link in links"
          :key="link.to"
          tag="li"
          active-class="activeClass"
          :to="link.to"
        >{{ link.title }}</router-link>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      links: [
        { to: '/custom-palette', title: '这个不是palette' },
        { to: '/custom-renderer', title: '自定义renderer' },
        { to: '/custom-context-pad', title: '自定义contextPad' },
        { to: '/custom-modeler', title: '自定义modeler' },
        { to: '/custom-properties-panel', title: '自定义properties-panel' }
      ]
    }
  },

  setNodeColor() {
      var elementRegistry = this.bpmnModeler.get('elementRegistry')

      // 执行代码

      for (var node in this.nodeMap) {
        var shape = elementRegistry.get(this.nodeMap[node].nodeId)
        console.log(shape+'ssssssssssssssssscolor')
        this.modeling.updateProperties(shape, {
          name: this.nodeMap[node].nodeName
        })
        if (this.nodeMap[node].approved) {
          this.modeling.setColor(shape, {
            fill: 'white',
            stroke: 'green'
          })
        }
        if (this.nodeMap[node].current) {
          this.modeling.setColor(shape, {
            fill: 'white',
            stroke: 'red'
          })
        }
      }

  }
    

  


}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.router_ul {
  display: flex;
  justify-content: center;
  margin: 0;
  list-style: none;
  padding: 10px 0;
}
.router_ul li {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.3s;
}
.router_ul li.activeClass {
  background: #4d90fe;
  color: #fff;
  border: none;
}
</style>
