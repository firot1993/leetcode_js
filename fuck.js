this.getAllUser().then(res => {
    getTopComments(this.listQuery).then(response => {
      if (response.code === 'A00000') {
        this.list = response.data.topComments
        this.list !== null &&
            this.list.map(comments => 
                comments.topComments.map(
                    (topcomment => topcomment.hasOwnProperty('creator') ? topcomment.updater = res[topcomment.updater] :
                                                                          topcomment.updater = topcomment.updater)));
        this.total = response.data.total
        this.listQuery.pageSize = this.pageSize
      }
    })
  })


var fuck = function(list){
    list !== null &&
    list.map(comments => 
        comments.topComments.map(
            (topcomment => topcomment.hasOwnProperty('creator') ? topcomment.updater = res[topcomment.updater] :
                                                                  topcomment.updater = topcomment.updater)));
}

var list =  [
    {
        'topComments':[
            {
                'creator': 'god',
                'updater': 'fuck'
            }
        ]
    }
  ];

var res = {
    'fuck' :'you'
}

fuck(list)
console.log(list)

  this.getAllUser().then(res => {
    getTopComments(this.listQuery).then(response => {
      if (response.code === 'A00000') {
        this.list = response.data.topComments
        if (this.list !== null) {
          for (let i = 0; i < this.list.length; i++) {
            let index = undefined
            for (index in this.list[i].topComments) {
              if (this.list[i].topComments[index].hasOwnProperty('creator')) {
                this.list[i].topComments[index].updater = res[this.list[i].topComments[index].updater]
              }
            }
          }
        }
        this.total = response.data.total
        this.listQuery.pageSize = this.pageSize
      }
    })
  })