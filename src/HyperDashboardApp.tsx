import AdminDashboard from "./layouts/AdminDashboard"
import {Provider} from 'react-redux'
import { store } from "./store"

export const HyperDashboardApp = () => {
  return (
    <div>
      <Provider store={store}>
        <AdminDashboard />
      </Provider>
    </div>
  )
}
