/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReduxWrapper } from './utils';
import FileUploader from '../components/ImageDropper/ImageDropper';
import { log } from '../utils/logger';

export const SingleFile = () => (
  <ReduxWrapper>
    <FileUploader onDrop={log} />
  </ReduxWrapper>
);

export const MultipleFiles = () => (
  <ReduxWrapper>
    <FileUploader onDrop={log} multiple />
  </ReduxWrapper>
);

export default {
  title: 'File Uploader',
};
