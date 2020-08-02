const api = require('./src/app');
const porta = process.env.PORT || 3000;

api.listen(porta, () => {
  console.log('API sendo executada na porta:', porta);
});
