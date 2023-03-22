import { CssBaseline } from '@mui/material';
import { MainProvider } from './providers/MainProvider';
import './index.scss';
import Routing from './routing';

function App() {
	return (
		<>
			<CssBaseline />
			<MainProvider>
				<Routing />
			</MainProvider>
		</>
	);
}

export default App;
