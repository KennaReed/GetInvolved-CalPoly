import { useFilePicker } from 'use-file-picker';

function FilePicker() {
    const [filesContent, errors, openFileSelector, loading] = useFilePicker({
      multiple: true,
      // accept: '.ics,.pdf',
      accept: ['.json', '.pdf'],
    });
  
    if (errors.length > 0) return <p>Error!</p>;
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <button onClick={() => openFileSelector()}>Reopen file selector</button>
        <pre>{JSON.stringify(filesContent)}</pre>
      </div>
    );
  }