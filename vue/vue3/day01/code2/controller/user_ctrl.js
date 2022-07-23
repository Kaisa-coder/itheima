import db from '../db/index.js'

// 使用ES6 按需导出
export async function getAllUser(req,res){
try{
  const [rows]= await db.query('select id ,username,nickname,xxx from my_db_01')
res.send({
    status:0,
    message:'获取用户列表数据成功',
    data:rows
  })
}catch(err){
  res.send({
    status:1,
    message:'获取用户列表失败',
    desc:err.message,
  })
}
}

