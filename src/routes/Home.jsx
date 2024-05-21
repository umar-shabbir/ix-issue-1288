import { IxIconButton, IxContentHeader, IxTypography } from "@siemens/ix-react";

export default function Home() {
  return (
    <>
      <div className="row">
        <IxContentHeader
          header-title="Ix Issue 1288"
          header-subtitle="Reproduce issue with React Testing Library"
        >
          <IxIconButton icon="connected" ghost variant="Primary">
            Refresh
          </IxIconButton>
          <IxIconButton icon="refresh" ghost variant="Primary">
            Refresh
          </IxIconButton>
          <IxIconButton icon="trashcan" ghost variant="Primary">
            Delete
          </IxIconButton>
          <IxIconButton icon="question" ghost variant="Primary">
            Help
          </IxIconButton>
        </IxContentHeader>
      </div>

      <div>
        <IxTypography format="display-sm">Hello World</IxTypography>
      </div>
    </>
  );
}
