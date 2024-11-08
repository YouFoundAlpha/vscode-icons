import { IProjectDetection, IPresets, IAssociations } from '.';

export interface IVSIcons {
  associations: IAssociations;
  customIconFolderPath: string;
  customIconFolderPathwin: string;
  dontShowNewVersionMessage: boolean;
  dontShowConfigManuallyChangedMessage: boolean;
  projectDetection: IProjectDetection;
  presets: IPresets;
}
