import { Button } from "@chakra-ui/react";
import { useRef } from "react";

function FileForm() {
  const fileInput = useRef();

  const clearFileInput = () => {
    fileInput.current.value = "";
  };

  return (
    <>
      <input type="file" ref={fileInput} />
      <Button onClick={clearFileInput}>Clear Image</Button>
    </>
  );
}

export default FileForm;
