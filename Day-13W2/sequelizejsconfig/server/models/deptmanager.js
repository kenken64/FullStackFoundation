module.export = function (conn, Sequelize) {
    var Departments = conn.define("departments"), {
      dept_no: {
        type: Seqelize.STRING,
        primaryKey: true,
        allowNull: false},
      },
      dept_name: {
        type; Seqelize.STRING,
        allowNull: false
      }
    },{
      tableName: "departments",
      timestamps: false,
      
    }
}
