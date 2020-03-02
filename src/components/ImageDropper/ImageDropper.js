/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import * as Styles from './styles';

const FileUploader = ({ onDrop, multiple }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg,.png,.jpeg,.bmp',
    multiple,
  });

  return (
    <Styles.FileUploaderWrapper {...getRootProps()}>
      <Styles.FileUploaderText>
        Drop your image{multiple ? 's' : ''} here
      </Styles.FileUploaderText>
      <Styles.FileUploaderIcon className="fa fa-camera" aria-hidden="true" />
      <input {...getInputProps()} />
    </Styles.FileUploaderWrapper>
  );
};

FileUploader.propTypes = {
  onDrop: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
};

FileUploader.defaultProps = {
  multiple: false,
};

export default FileUploader;
