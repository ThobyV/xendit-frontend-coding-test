import { useEffect, useState, useCallback } from 'react'
import search from './SvgIcons/search.svg'
import notifications from './SvgIcons/notifications.svg'
import settings from './SvgIcons/settings.svg'
import contacts from './SvgIcons/contacts.svg'
import avatar from './SvgIcons/avatar.svg'
import add from './SvgIcons/add.svg'
import menu from './SvgIcons/menu.svg'
import logo from './SvgIcons/logo.svg'
import home from './SvgIcons/home.svg'
import close from './SvgIcons/close.svg'
import edit from './SvgIcons/edit.svg'
import deleteicon from './SvgIcons/deleteicon.svg'
import selectarrow from './SvgIcons/selectarrow.svg'
import arrowleft from './SvgIcons/arrowleft.svg'
import arrowright from './SvgIcons/arrowright.svg'


import './App.css'

const apiurl: string = 'https://university-api.tranityproject.com/api/v1/university';

interface ListProps {
  name: string,
  domains: Array<string> | string,
  country: string,
  id: number,
}


const LoadingAnimation = ({ loading }: { loading: boolean }) => {
  return loading ? <div className='loading-animation'>
    <div></div>
  </div>
    : null
}

const NewItem = ({ handleModal }: { handleModal: () => void }) => {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [domain, setDomain] = useState('')
  const [webPages, setWebPages] = useState('')

  const addItem = useCallback(async () => {
    try {
      const data = await fetch(apiurl, {
        body: JSON.stringify({ name, country, domains: [domain], web_pages: [webPages], alpha_two_code: 234 }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(await data.json());
      handleModal();
    } catch (e) {
      console.log(e)
    }
  }, [name, country, domain, webPages])

  return (
    <div className='card-sm'>
      <div className='mb-3'>
        <div className='f-black bold'><h2>Create new university</h2></div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Name
        </span>
        <div className='no-outline f-large'>
          <input onChange={e => setName(e.target.value)} type="text" value={name} />
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Country
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <select onChange={e => setCountry(e.target.value)} value={country}>
              <option value='10'>Nigeria</option>
              <option value='20'>London</option>
              <option value='30'>Finland</option>
              <option value='30'>USA</option>
              <option value='30'>India</option>
              <option value='30'>Germany</option>
            </select>
          </div>
          <div className='pl-3 m-left'>
            <img src={selectarrow} />
          </div>
        </div>
      </div> <div className='border-rounded-2'>
        <span className='border-text-2'>
          Domain
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <input type="text" onChange={e => setDomain(e.target.value)} value={domain} />
          </div>
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Web pages
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <input type="text" onChange={e => setWebPages(e.target.value)} value={webPages} />
          </div>
        </div>
      </div>

      <div className='flex nav bg-grey-5'>
        <div>
          Actions
        </div>
        <div className='flex m-left'>
          <button onClick={addItem} className='button-purple'>
            <div>Create</div>
          </button>
        </div>
        <div className='flex pl-1'>
          <button onClick={handleModal} className='button-purple-border'>
            <div>Cancel</div>
          </button>
        </div>
      </div>
    </div>
  )
}

const EditItem = ({ item, handleModal }: { item: any, handleModal: () => void }) => {
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')
  const [domain, setDomain] = useState('')
  const [webPages, setWebPages] = useState('')

  useEffect(() => {
    setName(item.name);
    setCountry(item.country);
    setDomain(item.domains[0]);
    setWebPages(item.web_pages[0]);
  }, [])

  const editItem = useCallback(async () => {
    try {
      const data = await fetch(`${apiurl}/${item.id}`, {
        body: JSON.stringify({ name, country, domains: [domain], web_pages: [webPages], alpha_two_code: item.id }),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(await data.json());
      handleModal();
    } catch (e) {
      console.log(e)
    }
  }, [name, country, domain, webPages])

  return (
    <div className='card-sm'>
      <div className='mb-3'>
        <div className='f-black bold'><h2>Edit</h2></div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Name
        </span>
        <div className='no-outline f-large'>
          <input onChange={e => setName(e.target.value)} type="text" value={name} />
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Country
        </span>
        <div className='no-outline f-large'>
          <div className='flex'>
            <select className='cursor-pointer' onChange={e => setCountry(e.target.value)} value={country}>
              <option value='10'>Nigeria</option>
              <option value='20'>London</option>
              <option value='30'>Finland</option>
              <option value='30'>USA</option>
              <option value='30'>India</option>
              <option value='30'>Germany</option>
            </select>
            <div className='pl-3 m-left'>
              <img src={selectarrow} />
            </div>
          </div>
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Domain
        </span>
        <div>
          <div className='no-outline f-large'>
            <input type="text" onChange={e => setDomain(e.target.value)} value={domain} />
          </div>
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Web pages
        </span>
        <div>
          <div className='no-outline f-large'>
            <input type="text" onChange={e => setWebPages(e.target.value)} value={webPages} />
          </div>
        </div>
      </div>

      <div className='flex nav bg-grey-5'>
        <div>
          Actions
        </div>
        <div className='flex m-left'>
          <button onClick={editItem} className='button-purple'>
            <div>Save changes</div>
          </button>
        </div>
        <div className='flex pl-1'>
          <button onClick={handleModal} className='button-purple-border'>
            <div>Cancel</div>
          </button>
        </div>
      </div>
    </div>
  )
}

const ViewItem = ({ item, handleViewModal, handleEditModal, }: { handleViewModal: () => void, handleEditModal: () => void, item: { id: number, name: string, created_at: string, updated_at: string, web_pages: Array<string>, domains: string | Array<string>, country: string } }) => {

  const closeViewModal = () => {
    handleViewModal();
  }

  const handleEdit = () => {
    closeViewModal();
    handleEditModal();
  }

  const deleteItem = useCallback(async () => {
    try {
      const data = await fetch(`${apiurl}/${item.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(await data.json());
      closeViewModal();
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div className='card-sm'>
      <div className='flex nav bg-grey-5'>
        <div>
          Actions
        </div>
        <div className='m-left'>
          <button onClick={handleEdit}>
            <div className='flex'>
              <div>
                <img src={edit} />
              </div>
              <div className='no-outline f-large pl-1 f-purple bold'>
                Edit
              </div>
            </div>
          </button>

        </div>
        <div className='pl-1'>
          <button onClick={deleteItem}>
            <div className='flex'>
              <div>
                <img src={deleteicon} />
              </div>
              <div className='no-outline f-large pl-1 bold'>
                Delete
              </div>
            </div>
          </button>
        </div>
      </div>
      <div>
        <div className='py-3 bold'><h2>Details</h2></div>
        <div className='py-1 flex flex-space-between'>
          <div>
            ID
          </div>
          <div className='no-outline f-large pl-3'>
            {item.id}
          </div>
        </div>
        <div className='py-1 flex flex-space-between'>
          <div>
            Name
          </div>
          <div className='no-outline f-large pl-3'>
            {item.name}
          </div>
        </div>
        <div className='py-1 flex flex-space-between'>
          <div>
            Country
          </div>
          <div className='no-outline f-large pl-3'>
            {item.country}
          </div>
        </div>
        <div className='py-1 flex flex-space-between'>
          <div>
            Web Pages
          </div>
          <div className='no-outline f-large pl-3'>
            {item?.web_pages[0]}
          </div>
        </div>
        <div className='py-1 flex flex-space-between'>
          <div>
            Domain
          </div>
          <div className='no-outline f-large pl-3'>
            {item?.domains[0] || item?.domains}
          </div>
        </div><div className='py-3 flex flex-space-between'>
          <div>
            Created
          </div>
          <div className='no-outline f-large pl-3'>
            {item.created_at}
          </div>
        </div><div className='py-1 flex flex-space-between'>
          <div>
            Updated
          </div>
          <div className='no-outline f-large pl-3'>
            {item.updated_at}
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = ({ title, isOpen, handleModal, children }: { title: string, isOpen: boolean, handleModal: () => void, children: any }) => {

  return (
    <div className={` modal ${isOpen ? 'd-block' : 'd-none'}`}>
      <div className='modal-main'>
        <div className='card-sm bg-purple'>
          <div className='flex'>
            <div className='bold f-white'>
              <h2>{title}</h2>
            </div>
            <div className='m-left'>
              <button className="no-outline" onClick={handleModal}><img src={close} /></button>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
const NavBar = () => {

  return (<div className='navbar'>
    <div className='navbar-items'>
      <div className='m-left'><img src={search} /></div>
      <div><img src={contacts} /></div>
      <div><img src={notifications} /></div>
      <div><img src={settings} /></div>
      <div><img src={avatar} /></div>
    </div>
  </div>)
}

const List: any = ({ list, viewStatus, editStatus, handleViewModal, handleEditModal }: { list: Array<ListProps>, editStatus: boolean, viewStatus: boolean, handleEditModal: () => void, handleViewModal: () => void }) => {
  const [selectedItem, setSelectedItem] = useState<any>({});

  const handleSetItem = (id: number) => {
    const item = list.find((d: { id: number }) => d.id === id);
    setSelectedItem(item)
  }

  const handleViewItem = (id: number) => {
    handleSetItem(id);
    handleViewModal();
  }

  return <div className='list'>
    {
      list.map((l) => (
        <div key={l.id} className='flex px-1 list-card'>
          <div className='half-w py-2 flex-by-top'>
            <div>
              <input type='checkbox' />
            </div>
            <span>
              <div className='pl-1'>
                <span>{l.name}</span>
                <div>www.{l?.domains[0] || l?.domains}</div>
              </div>
            </span>
          </div>
          <div className='half-w flex'>
            {l.country}
            <div className='m-left'>
              <button className="no-outline" onClick={() => handleViewItem(l.id)}><img src={menu} /></button>
            </div>
          </div>
        </div>))
    }
    <Modal title='View' isOpen={viewStatus} handleModal={handleViewModal}>
      {selectedItem?.id && <ViewItem handleViewModal={handleViewModal} handleEditModal={handleEditModal} item={selectedItem} />}
    </Modal>
    <Modal title='Edit' isOpen={editStatus} handleModal={handleEditModal}>
      {selectedItem?.id && <EditItem handleModal={handleEditModal} item={selectedItem} />}
    </Modal>
  </div>

}

const Content = () => {
  const [requestData, setRequestData] = useState({ data: [], total: 0, last_page: 0, current_page: 0 });
  const [queryParams, setQueryParams] = useState({ per_page: 10, current_page: 1, next_page: 2, total_pages: 0 });

  const [filterParams, setFilterParams] = useState({ sortName: 'Name', sortCountry: 'Country' });

  const [createStatus, setCreateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setEditStatus(!editStatus)
  }
  const handleView = () => {
    setViewStatus(!viewStatus)
  }
  const handleCreate = () => {
    setCreateStatus(!createStatus)
  }

  const handlePerPage = (e: any) => {
    setQueryParams({ ...queryParams, per_page: e.target.value })
  }

  const handlePrevPage = (e: any) => {
    setQueryParams((queryParams) => ({ ...queryParams, current_page: queryParams.current_page-- }))
  }
  const handleNextPage = (e: any) => {
    setQueryParams((queryParams) => ({ ...queryParams, current_page: queryParams.current_page++ }))
  }

  const getUniversities = async () => {
    try {
      setLoading(true);
      const { per_page, current_page } = queryParams;
      const data = await (await fetch(`${apiurl}?limit=${per_page}&page=${current_page}`)).json();
      setRequestData(data);
      setLoading(false);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getUniversities();
  }, [])

  useEffect(() => {
    if (requestData.total) {
      getUniversities();
    }
  }, [queryParams])

  return (
    <div className='content-center'>
      <div className='content-center-page'>

        <div className='flex py-2'>
          <div className='m-right'>
            <h1>
              Universities
            </h1>
          </div>
          <div className='m-left'>
            <button className='button-purple' onClick={handleCreate}>
              <div className='flex flex-space-between'>
                <div><img src={add} /></div>
                <div className='pl-1'>Add</div>
              </div>
            </button>
          </div>
        </div>

        <LoadingAnimation loading={loading} />

        <div className='card'>
          <div className='flex pb-3'>
            <div
              className="flex-80 border-rounded"
            >
              <div className='flex'>
                <div>
                  <img src={search} />
                </div>
                <div className='no-outline'>
                  <input className="px-2" type="text" value="Search universities name" />
                </div>
              </div>
            </div>
            <div className='border-rounded ml-2'>
              <span className='border-text'>
                Country
              </span>
              <div className='flex'>
                <div className='no-outline f-large'>
                  <select>
                    <option>Germany</option>
                    <option>United states</option>
                    <option>India</option>
                    <option>Nigeria</option>
                  </select>
                </div>
                <div className='pl-2'>
                  <img src={selectarrow} />
                </div>
              </div>
            </div>
            <div className='border-rounded ml-2'>
              <span className='border-text'>
                Sort Item
              </span>
              <div className='no-outline f-large'>
                <div className='flex'>
                  <select className='cursor-pointer' value={filterParams.sortName}>
                    <option value='30'>Name</option>
                    <option value='30'>Country</option>
                  </select>
                  <div className='pl-2'>
                    <img src={selectarrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex bg-grey-5 px-1'>
            <div className='half-w py-2 flex-by-top'>
              <div>
                <input type='checkbox' />
              </div>
              <span>
                <div className='pl-1'>
                  <span>University name</span>
                </div>
              </span>
            </div>
            <div className='half-w bg-grey'>
              country
            </div>
          </div>
          <List list={requestData.data} handleEditModal={handleEdit} handleViewModal={handleView} viewStatus={viewStatus} editStatus={editStatus} />
          <div className='list-card'>
            <div className='flex'>
              <div className='m-left'>Rows per page:</div>
              <div className='flex pl'>
                <div>
                  <select onChange={handlePerPage} value={queryParams.per_page}>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option value='30'>40</option>
                    <option value='30'>50</option>
                    <option value='30'>100</option>
                  </select>
                </div>
                <div className='pl'><img src={selectarrow} /></div>
              </div>
              <div className='px-3'>{requestData.current_page}-{requestData.last_page} of {requestData.total}</div>
              <div className='flex flex-space-between'>
                <div>
                  <button className="no-outline" onClick={handlePrevPage}><img src={arrowleft} /></button>
                </div>
                <div className='px-3'>
                  <button className="no-outline" onClick={handleNextPage}><img src={arrowright} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal title='Create' isOpen={createStatus} handleModal={handleCreate}>
          <NewItem handleModal={handleCreate} />
        </Modal>
      </div>
    </div>
  )
}

const SideBar = () => {
  return (<div className='sidebar-content flex-col'>
    <div className='py-2'>
      <img src={logo} width='45px' height='45px' />
    </div>
    <div>
      <div className='uppercase f-grey'><h2>General</h2></div>
      <div className='flex card-sidebar'>
        <div>
          <img src={home} />
        </div>
        <div className='pl-1 f-green'><h2>Main</h2></div>
      </div>
    </div>
    <div className='m-end py-3'>
      <div className='f-white'><h2>Need help?</h2></div>
      <div className='f-grey mb-2'><h2>Check our docs</h2></div>
      <div>
        <button className='f-large button-green'>Documentation</button>
      </div>
    </div>
  </div>)
}
function App() {

  return (
    <div className='App'>
      <div className='container'>
        <div className='sidebar'>
          <SideBar />
        </div>
        <div className='content'>
          <NavBar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
