import { Button } from 'shared/ui/button';
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
