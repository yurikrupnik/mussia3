App example:

```jsx
import { BrowserRouter } from 'react-router-dom';
import { Provider } from '../../services/users/context';
import routes from '../../components/routes';
<BrowserRouter>
    <App
        providers={[Provider]}
        userAgent={window.navigator.userAgent}
        routes={routes}
    />
</BrowserRouter>
```


