import { render } from 'inferno';
import ModeExplorer from '../../components/ModeExplorer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ModeExplorer />, div);
});
