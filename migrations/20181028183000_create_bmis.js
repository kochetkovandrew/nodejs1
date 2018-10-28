module.exports = function migration201801028183000(){
  this.createTable('bmis', function(){
    this.string('name', {not_null: true})
    this.float('height')
    this.float('weight')
    this.date('date')
  })
}