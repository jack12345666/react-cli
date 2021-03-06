import dva from 'dva'
import createLoading from 'dva-loading'
import { message } from 'antd'

// 1. Initialize
const app = dva({
    onError(e) {
      message.error(e.message)
    }
  })

// 2. Plugins
app.use(createLoading())


// 3. Model
app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
