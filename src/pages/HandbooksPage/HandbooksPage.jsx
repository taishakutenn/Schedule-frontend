import { useState } from "react";

import { HandbookManager } from "../../components/HandbookManager/HandbookManager";
import { HandbookMenu } from "../../components/HandbookMenu/HandbookMenu";
import { getHandbookNames } from "../../components/HandbookTable/tableConfig";

const handbookNames = getHandbookNames();

export default function HandbooksPage() {
  const [selectedHandbook, setSelectedHandbook] = useState(null);

  return (
    <div className="main">
      <HandbookMenu handbooks={handbookNames} selectedHandbook={selectedHandbook} onSelect={setSelectedHandbook} />
      {selectedHandbook && <HandbookManager handbookName={selectedHandbook} />}
    </div>
  );
}
