import { useState } from 'react'
import search from './SvgIcons/search.svg'
import notifications from './SvgIcons/notifications.svg'
import settings from './SvgIcons/settings.svg'
import contacts from './SvgIcons/contacts.svg'
import avatar from './SvgIcons/avatar.svg'
import add from './SvgIcons/add.svg'
import menu from './SvgIcons/menu.svg'
import logo from './SvgIcons/logo.svg'
import close from './SvgIcons/close.svg'
import selectarrow from './SvgIcons/selectarrow.svg'

import './App.css'

interface ListProps {
  name: string,
  domain: string,
  location: string,
}


const ViewItem = () => {

  return (
    <div className='card-sm'>
      <div className='flex nav bg-grey-5'>
        <div>
          Actions
        </div>
        <div className='flex m-left'>
          <div>
            <img src={selectarrow} />
          </div>
          <div className='no-outline f-large pl-1'>
            Edit
          </div>
        </div>
        <div className='flex pl-1'>
          <div>
            <img src={selectarrow} />
          </div>
          <div className='no-outline f-large pl-1'>
            Delete
          </div>
        </div>
      </div>
      <div>
        <div className='py-3 bold'>Details</div>
        <div className='py-3 flex flex-space-between'>
          <div>
            ID
          </div>
          <div className='no-outline f-large pl-3'>
            2223
          </div>
        </div>
        <div className='py-3 flex flex-space-between'>
          <div>
            Name
          </div>
          <div className='no-outline f-large pl-3'>
            University of blah
          </div>
        </div>
        <div className='py-3 flex flex-space-between'>
          <div>
            Name
          </div>
          <div className='no-outline f-large pl-3'>
            University of blah
          </div>
        </div>
        <div className='py-3 flex flex-space-between'>
          <div>
            Name
          </div>
          <div className='no-outline f-large pl-3'>
            University of blah
          </div>
        </div>
      </div>
    </div>
  )
}

const NewItem = () => {

  return (
    <div className='card-sm'>
      <div className='mb-2'>
        <div className='f-large f-black bold'>Create new university</div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Name
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <input type="text" value="Name" />
          </div>
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Country
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            Germany
            <select>
              <option></option>
            </select>
          </div>
          <div className='pl-3'>
            <img src={selectarrow} />
          </div>
        </div>
      </div> <div className='border-rounded-2'>
        <span className='border-text-2'>
          Domain
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <input type="text" value="Name" />
          </div>
        </div>
      </div>
      <div className='border-rounded-2'>
        <span className='border-text-2'>
          Web pages
        </span>
        <div className='flex'>
          <div className='no-outline f-large'>
            <input type="text" value="Name" />
          </div>
        </div>
      </div>
      <div className='flex nav bg-grey-5'>
        <div>
          Actions
        </div>
        <div className='flex m-left'>
          <button className='button-purple'>
            <div>Add</div>
          </button>
        </div>
        <div className='flex pl-1'>
          <button className='button-purple-border'>
            <div>Add</div>
          </button>
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
            <div>
              {title}
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

const List: any = ({ list, handleModal }: { list: Array<ListProps>, handleModal: () => void, }) => {
  return list.map((l) => (<div className='flex px-1'>
    <div className='half-w py-2 flex-by-top'>
      <div>
        <input type='checkbox' />
      </div>
      <span>
        <div className='pl-1'>
          <span>{l.name}</span>
          <div>{l.domain}</div>
        </div>
      </span>
    </div>
    <div className='half-w flex'>
      {l.location}
      <div className='m-left'>
        <button className="no-outline" onClick={handleModal}><img src={menu} /></button>
      </div>
    </div>
  </div>)
  )
}

const Content = () => {
  const [editStatus, setEditStatus] = useState(false);
  const [createStatus, setCreateStatus] = useState(false);
  const [viewStatus, setViewStatus] = useState(false);

  const handleView = () => {
    setViewStatus(!viewStatus)
  }
  const handleCreate = () => {
    setCreateStatus(!createStatus)
  }

  const handleEdit = () => {
    setEditStatus(!editStatus)
  }

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

        <div className='card'>
          <div className='flex pb-3'>
            <div
              className="border-rounded flex-80"
            >
              <div className='flex'>
                <div>
                  <div><img src={search} /></div>
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
                  Germany
                  <select>
                    <option></option>
                  </select>
                </div>
                <div className='pl-3'>
                  <img src={selectarrow} />
                </div>
              </div>
            </div>
            <div className='border-rounded ml-2'>
              <span className='border-text'>
                Sort Item
              </span>
              <div className='flex'>
                <div className='no-outline f-large'>
                  Sort
                  <select>
                    <option></option>
                  </select>
                </div>
                <div className='pl-3'>
                  <img src={selectarrow} />
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
          <List list={[{ name: 'bingham', location: 'Keffi', domain: 'www.keffi.com' }, { name: 'bingham', location: 'Keffi', domain: 'www.keffi.com' }]} handleModal={handleView} />
        </div>
        <Modal title='View Details' isOpen={viewStatus} handleModal={handleView}>
          <ViewItem />
        </Modal>
        <Modal title='New data' isOpen={createStatus} handleModal={handleCreate}>
          <NewItem />
        </Modal>
      </div>
    </div>
  )
}

const SideBar = () => {
  return (<div className='sidebar-content flex-col'>
    <div className='mb-1'>
      <img src={selectarrow} width='45px' height='45px'/>
    </div>
    <div>
      <div>General</div>
      <div className='card-sm bg-grey-5'>
        <span>
          <img src={logo} />
        </span>
        <span>Main</span>
      </div>
    </div>
    <div className='m-end py-3'>
      <div>Need help?</div>
      <div>Check our docs</div>
      <div>
        <button className='button-green'>documentation</button>
      </div>
    </div>
  </div>)
}
function App() {
  const [count, setCount] = useState(0)

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
