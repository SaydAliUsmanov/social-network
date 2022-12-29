import { Button } from 'shared/ui/Button';
import { Sidebar } from 'widgets/sidebar/ui';

export default function Home() {
  return (
    <div>
      <Button as='div' variant='contained'>
        Button
      </Button>
      <Sidebar />
    </div>
  );
}
