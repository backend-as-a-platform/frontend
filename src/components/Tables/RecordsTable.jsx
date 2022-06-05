import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PencilIcon from '../Icons/PencilIcon';
import CheckIcon from '../Icons/CheckIcon';
import XIcon from '../Icons/XIcon';
import SpinnerIcon from '../Icons/SpinnerIcon';
import { deleteRecord, updateRecord } from '../../hooks/useForm';

const RecordsTable = ({ formId, cols, records, version, latestVersion }) => {
  const [recordValues, setRecordValues] = useState({});
  const [disabled, setDisabled] = useState({});
  const [deleteConfirm, setDeleteConfirm] = useState({});
  const [deleteLoading, setDeleteLoading] = useState({});
  const [editLoading, setEditLoading] = useState({});
  const [checkboxes, setCheckboxes] = useState({});

  useEffect(() => {
    const truthy = {};
    const falsy = {};

    records.forEach((record) => {
      truthy[record._id] = true;
      falsy[record._id] = false;
    });

    setDisabled(truthy);
    setEditLoading(falsy);
    setDeleteConfirm(falsy);
    setDeleteLoading(falsy);
  }, [records]);

  useEffect(() => {
    const values = {};

    records.forEach((record) => {
      values[record._id] = {};

      cols.forEach((col) => (values[record._id][col] = record[col]));
    });

    setRecordValues(values);
  }, [cols]);

  const onRecordChange = (e, recordId, col) => {
    const isCheckbox = Array.isArray(recordValues[recordId][col]);
    const value = isCheckbox ? e.target.value.split(',') : e.target.value;

    setRecordValues({
      ...recordValues,
      ...{ [recordId]: { ...recordValues[recordId], [col]: value } },
    });
  };

  const onEditButtonClick = async (recordId) => {
    if (!disabled[recordId]) {
      const formData = recordValues[recordId];

      setEditLoading({ ...editLoading, ...{ [recordId]: true } });
      await updateRecord(formId, recordId, formData, version, latestVersion);
      setEditLoading({ ...editLoading, ...{ [recordId]: false } });
    }

    setDisabled({ ...disabled, ...{ [recordId]: !disabled[recordId] } });
  };

  const onDeleteButtonClick = async (recordId) => {
    setDeleteConfirm({
      ...deleteConfirm,
      ...{ [recordId]: !deleteConfirm[recordId] },
    });

    if (deleteConfirm[recordId]) {
      setDeleteLoading({ ...deleteLoading, ...{ [recordId]: true } });

      const deletedRecord = await deleteRecord(
        formId,
        recordId,
        version,
        latestVersion
      );

      if (deletedRecord) {
        records.forEach((record, i) => {
          if (record._id === deletedRecord._id) {
            records.splice(i, 1);
          }
        });
      }

      setDeleteLoading({ ...deleteLoading, ...{ [recordId]: false } });
    }
  };

  return records.length ? (
    <table className="table w-full mb-8">
      <thead>
        <tr>
          <th>#</th>
          {cols.map((col, i) => (
            <th key={i}>{col}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {records &&
          records.map((record, i) => {
            return (
              <tr key={i} className="hover">
                <td>{i + 1}</td>
                {cols.map((col, i) => {
                  record[col] = record[col] !== null ? record[col] : 0;

                  return (
                    <td key={i} className="min-w-fit">
                      {
                        <input
                          type="text"
                          value={
                            recordValues[record._id] &&
                            recordValues[record._id][col]
                          }
                          onChange={(e) => onRecordChange(e, record._id, col)}
                          className="input input-sm input-bordered border-gray-500 disabled:border-0 disabled:cursor-text disabled:bg-base-100"
                          disabled={disabled[record._id]}
                        />
                      }
                    </td>
                  );
                })}
                <td>
                  <button
                    className="btn btn-sm btn btn-accent mr-2"
                    onClick={(e) => onEditButtonClick(record._id)}
                  >
                    {disabled[record._id] ? (
                      <PencilIcon />
                    ) : editLoading[record._id] ? (
                      <SpinnerIcon size={4} />
                    ) : (
                      <CheckIcon />
                    )}
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={(e) => onDeleteButtonClick(record._id)}
                  >
                    {!deleteConfirm[record._id] ? (
                      !deleteLoading[record._id] ? (
                        <XIcon />
                      ) : (
                        <SpinnerIcon size={4} />
                      )
                    ) : (
                      <CheckIcon />
                    )}
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  ) : (
    <p className="mb-8">No records found</p>
  );
};

export default RecordsTable;
