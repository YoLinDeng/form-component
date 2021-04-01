import idcardVerify from 'idcard'
export const validate = field => {
  const { type, name, code } = field
  const text = type === 'input' ? '请输入' : '请选择'
  const rules = {
    name: [
      { required: true, message: `${text}${name}` },
      {
        pattern: /^[\u4e00-\u9fa5]{2,10}$/,
        message: `${name}须为2-20个中文字符`
      }
    ],
    mobile: [
      { required: true, message: `${text}${name}` },
      {
        pattern: /^0?((13[0-9])|(14[0-9])|(15([0-3]|[5-9]))|(166)|(18[0-9])|(17[0-9])|(19[8-9]))[0-9]{8}$/,
        message: `${name}格式错误`
      }
    ],
    idcard: [
      { required: true, message: `${text}${name}` },
      {
        validator: (rule, value, callback) => {
          if (!idcardVerify.verify(value)) {
            callback(new Error(`${name}格式错误`))
          } else {
            callback()
          }
        }
      }
    ],
  }
  const a = Object.keys(rules).find(key => code === key)
  return a
    ? rules[a]
    : [{ required: true, message: `${text}${name}` }]
}
