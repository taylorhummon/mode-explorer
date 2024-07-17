import { render } from 'inferno';
import ModeExplorer from './ModeExplorer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ModeExplorer />, div);
});
