import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Auth } from '../../contexts/Auth';
import EditForm from '../Dashboard/EditForm';
import { getUsersByIds } from '../../hooks/useAuth';
import { getProject } from '../../hooks/useProject';
import { getForm, getRecords } from '../../hooks/useForm';
import CTA from '../CTA/CTA';
import EditModal from '../Modals/EditModal';
import ArchiveModal from '../Modals/ArchiveModal';
import DeleteModal from '../Modals/DeleteModal';
import { ShareFormModal } from '../Modals/FormModal';
import PageTitle from '../Typography/PageTitle';
import PageButton from '../Typography/PageButton';
import ShareAlert, { ShareHelpAlert } from '../Alerts/ShareAlert';
import SectionTitle from '../Typography/SectionTitle';
import DownloadIcon from '../Icons/DownloadIcon';
import RecordsTable from '../Tables/RecordsTable';

const ManageForm = () => {
  const [auth] = useContext(Auth);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState('');
  const [version, setVersion] = useState(0);
  const [format, setFormat] = useState('json');
  const [latestVersion, setLatestVersion] = useState(0);
  const [versions, setVersions] = useState([]);
  const [shareTo, setShareTo] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);
  const [projectActive, setProjectActive] = useState();
  const [fields, setFields] = useState([]);
  const [owner, setOwner] = useState('');
  const [cols, setCols] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateFormModal, setShowCreateFormModal] = useState(false);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const { projectId, formId } = useParams();
  const toggleEditModal = (e) => setShowEditModal(!showEditModal);
  const toggleShareModal = (e) => setShowShareModal(!showShareModal);
  const toggleArchiveModal = (e) => setShowArchiveModal(!showArchiveModal);
  const toggleDeleteModal = (e) => setShowDeleteModal(!showDeleteModal);
  const addRecord = (e) => navigate(`/forms/${formId}`);

  useEffect(async () => {
    const project = await getProject(projectId);
    const form = await getForm(projectId, formId);

    setOwner(project.owner);
    setProjectActive(project.active);

    if (form) {
      setId(form._id);
      setName(form.name);
      setDescription(form.description);
      setFields(form.fields);
      setActive(form.active);
      setShareTo(form.access);
      setVersion(form.version);
      setLatestVersion(form.version);

      const versions = Array.from(
        { length: form.version },
        (_, i) => i + 1
      ).reverse();

      setVersions(versions);
      setAddedUsers(await getUsersByIds(form.restrictedTo));
    } else {
      navigate('/404');
    }
  }, []);

  useEffect(async () => {
    const records = await getRecords(id, version, latestVersion);

    if (records) {
      records.forEach((record) => {
        delete record.form;
        delete record.__v;
      });
    }

    setRecords(records);

    const recordKeys = {};

    if (records && records.length) {
      records.map((record) => {
        Object.keys(record).map((key) =>
          key != '_id' ? (recordKeys[key] = true) : null
        );
      });
    }

    setCols(Object.keys(recordKeys));
  }, [version, latestVersion]);

  const onVersionChange = (e) => setVersion(e.target.value);
  const onFormatChange = (e) => setFormat(e.target.value);

  const onExport = async (e) => {
    const file = await getRecords(id, version, latestVersion, format);

    if (file) {
      window.location.href = `${
        import.meta.env.VITE_BACKEND_URI
      }/forms/download?file=${file}`;
    }
  };

  return (
    <>
      <div>
        <PageTitle>{name}</PageTitle>
        {name ? (
          <>
            {auth._id === owner ? (
              <>
                {active ? (
                  <PageButton
                    style="error"
                    label="Delete"
                    onClick={toggleDeleteModal}
                  />
                ) : null}
                {projectActive ? (
                  <PageButton
                    style="warning"
                    label={active ? 'Archive' : 'Unarchive'}
                    onClick={toggleArchiveModal}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="info"
                    label="Share"
                    onClick={toggleShareModal}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="success"
                    label="+ Record"
                    onClick={addRecord}
                  />
                ) : null}
                {active ? (
                  <PageButton
                    style="primary"
                    label="Edit"
                    onClick={toggleEditModal}
                  />
                ) : null}
                <EditModal
                  type="form"
                  name={name}
                  description={description}
                  show={showEditModal}
                  onHide={toggleEditModal}
                  setName={setName}
                  setDescription={setDescription}
                />
                <ShareFormModal
                  projectId={projectId}
                  formId={formId}
                  show={showShareModal}
                  onHide={toggleShareModal}
                  shareTo={shareTo}
                  setShareTo={setShareTo}
                  addedUsers={addedUsers}
                  setAddedUsers={setAddedUsers}
                />
                <ArchiveModal
                  projectId={projectId}
                  formId={formId}
                  active={!active}
                  setActive={setActive}
                  show={showArchiveModal}
                  onHide={toggleArchiveModal}
                />
                <DeleteModal
                  projectId={projectId}
                  formId={formId}
                  show={showDeleteModal}
                  onHide={toggleDeleteModal}
                />
              </>
            ) : null}
          </>
        ) : null}
      </div>
      <CTA />
      {auth._id === owner && shareTo !== 'private' ? (
        <div className="mb-7">
          <ShareAlert
            helpText="Form URL -"
            value={window.location.href
              .split(`/projects/${projectId}`)
              .join('')}
          />
          <ShareAlert
            helpText="API Endpoint - POST, [GET, PUT, DELETE] -"
            value={`${
              import.meta.env.VITE_BACKEND_URI
            }/forms/${formId}/[record_id]`}
          />
        </div>
      ) : (
        <ShareHelpAlert />
      )}
      <EditForm active={active} fields={fields} />
      <SectionTitle>Records</SectionTitle>
      <button
        className="btn btn-sm btn-primary float-right ml-2"
        onClick={onExport}
      >
        <DownloadIcon />
      </button>
      <select
        className="select select-sm select-bordered max-w-xs float-right ml-2"
        value={format}
        onChange={onFormatChange}
      >
        <option disabled>Export</option>
        <option value="csv">CSV</option>
        <option value="html">HTML</option>
        <option value="json">JSON</option>
        <option value="rtf">RTF</option>
        <option value="txt">TXT</option>
        <option value="xlsx">EXCEL</option>
      </select>
      <select
        className="select select-sm select-bordered max-w-xs float-right"
        value={version}
        onChange={onVersionChange}
      >
        <option disabled>Version</option>
        <>
          {versions.map((v, i) => {
            const version = v === versions.length ? 'Latest' : `v${v}`;

            return (
              <option key={i} value={v}>
                {version}
              </option>
            );
          })}
        </>
      </select>
      {records && records.length ? (
        <RecordsTable
          formId={formId}
          cols={cols}
          records={records}
          version={version}
          latestVersion={latestVersion}
        />
      ) : (
        <p className="mb-8">No records found</p>
      )}
    </>
  );
};

export default ManageForm;
