import {
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Pagination,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import './Table.css';
import {
  SvgDownloadIcon,
  SvgSearchIcon,
  SvgSortUpIcon,
  SvgThreeDotIcon,
} from '../utils/SvgIcons';
import { eventData } from '../utils/constants';
import React, { useEffect, useState } from 'react';

const Table = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState(null);

  // Filter states
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = React.useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [sort, setSort] = useState('Most Recent');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortEventName, setSortEventName] = useState(false);
  const [sortDate, setSortDate] = useState(false);
  const [sortSpeaker, setSortSpeaker] = useState(false);

  // Filtered data logic
  const filteredData = eventData
    .filter(
      (item) =>
        item.eventName.toLowerCase().includes(search.toLowerCase()) ||
        item.speaker.toLowerCase().includes(search.toLowerCase()) ||
        item.eventDescription.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) => (statusFilter ? item.status === statusFilter : true))
    .filter((item) => {
      if (dateFilter === 'Today') {
        return item.date === new Date().toISOString().slice(0, 10);
      } else if (dateFilter === 'Last Week') {
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 30);
        return new Date(item.date) >= oneWeekAgo;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortEventName) {
        return a.eventName.localeCompare(b.eventName);
      }
      if (sortDate) {
        return a.date.localeCompare(b.date);
      }
      if (sortSpeaker) {
        return a.speaker.localeCompare(b.speaker);
      }
      if (sort === 'Most Recent') {
        return new Date(b.date) - new Date(a.date);
      }
      return 0;
    });

  // Pagination logic
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearch = (e) => setSearch(e.target.value);
  const handleStatusChange = (status) => setStatusFilter(status?.target?.value);
  const handleDateChange = (date) => setDateFilter(date?.target?.value);
  const handleSortChange = (sortValue) => setSort(sortValue?.target?.value);
  const handleRowsChange = (rows) =>
    setRowsPerPage(rows?.target?.value ? rows?.target?.value : 10);
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        radius="none"
        classNames={{
          closeButton:
            'top-[17.5px] mr-[14px] border-1 border-primary-nav/20 p-1 dark:bg-primary-unselect dark:text-primary-nav',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="gap-0 dark:bg-primary-nav">
                <p className="font-semibold text-lg mt-[6px] ">
                  {modalData?.eventName}
                </p>
                <p>{modalData?.date}</p>
                <p className="mt-5">{modalData?.eventDescription}</p>
                <div className="mt-8">
                  <AvatarGroup size="sm">
                    <Avatar
                      src="./avatarImage.png"
                      classNames={{ base: 'border-2 border-white' }}
                    />
                    <Avatar
                      src="./avatarImage2.png"
                      classNames={{ base: 'border-2 border-white' }}
                    />
                    <Avatar
                      src="./avatarImage3.png"
                      classNames={{ base: 'border-2 border-white' }}
                    />
                  </AvatarGroup>
                  <p>{`${modalData?.numGuestSpeakers} Guest Speakers: ${modalData?.speaker}`}</p>
                  <p>{`${modalData?.attendees} Attendees`}</p>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between items-center py-5 bg-[#F8FAFC] dark:bg-primary-unselect">
                <Button
                  variant="bordered"
                  className="border-1"
                  onPress={onClose}
                  radius="none"
                >
                  Close
                </Button>
                <div className="space-x-2">
                  <Button color="danger" radius="none">
                    Delete
                  </Button>
                  <Button className="bg-primary-dark text-white" radius="none">
                    Mark as completed
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="table-container">
        <div className="table-filter-wrapper">
          <div className="table-filter-container">
            <Input
              type="search"
              radius="none"
              className="table-input"
              placeholder="Search..."
              variant="bordered"
              classNames={{
                inputWrapper:
                  'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
              startContent={<SvgSearchIcon />}
              value={search}
              onChange={handleSearch}
            />
            <Select
              className="table-select"
              radius="none"
              variant="bordered"
              placeholder="Date"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
              selectedKeys={[dateFilter]}
              onChange={handleDateChange}
            >
              <SelectItem key="Today">Today</SelectItem>
              <SelectItem key="Last Week">Last Week</SelectItem>
            </Select>
            <Select
              className="w-28"
              radius="none"
              variant="bordered"
              placeholder="Status"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
              selectedKeys={[statusFilter]}
              onChange={handleStatusChange}
            >
              <SelectItem key="Completed">Completed</SelectItem>
              <SelectItem key="In Progress">In Progress</SelectItem>
            </Select>
            <p className="font-semibold">{`Displaying ${filteredData.length} results`}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Sort:</p>
            <Select
              className="w-36"
              radius="none"
              variant="bordered"
              placeholder="Most Recent"
              selectedKeys={[sort]}
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
              onChange={handleSortChange}
            >
              <SelectItem key="Most Recent">Most Recent</SelectItem>
            </Select>
            <Button
              isIconOnly
              radius="none"
              variant="bordered"
              className="border-1 border-primary-nav/10 dark:bg-primary-nav hover:border-primary-nav/60"
            >
              <SvgThreeDotIcon className="dark:stroke-white stroke-[#141414]" />
            </Button>
            <Button
              radius="none"
              variant="bordered"
              className="border-1 border-primary-nav/10 dark:bg-primary-nav hover:border-primary-nav/60"
              startContent={
                <SvgDownloadIcon className="dark:stroke-white stroke-[#141414]" />
              }
            >
              Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="table-row-wrapper">
          <div className="table-row-header">
            <div
              className="tabel-single-header"
              onClick={() => {
                setSortEventName(!sortEventName);
                setSortDate(false);
                setSortSpeaker(false);
              }}
            >
              <p>Event Name</p>
              {sortEventName ? (
                <SvgSortUpIcon className="stroke-[#64748b] dark:stroke-primary-dark" />
              ) : (
                ''
              )}
            </div>
            <div
              className="tabel-single-header"
              onClick={() => {
                setSortDate(!sortDate);
                setSortEventName(false);
                setSortSpeaker(false);
              }}
            >
              <p>Date</p>
              {sortDate ? (
                <SvgSortUpIcon className="stroke-[#64748b] dark:stroke-primary-dark" />
              ) : (
                ''
              )}
            </div>
            <div
              className="tabel-single-header"
              onClick={() => {
                setSortSpeaker(!sortSpeaker);
                setSortDate(false);
                setSortEventName(false);
              }}
            >
              <p>Speaker</p>
              {sortSpeaker ? (
                <SvgSortUpIcon className="stroke-[#64748b] dark:stroke-primary-dark" />
              ) : (
                ''
              )}
            </div>
            <div className="tabel-single-header">
              <p>Status</p>
            </div>
          </div>
          <div>
            <div className="table-data-container overflow-y-auto overflow-x-hidden">
              {paginatedData.map((item, idx) => (
                <div className="table-row-item dark:bg-primary-nav" key={idx}>
                  <p
                    className="cursor-pointer p-4 truncate"
                    onClick={() => {
                      setModalData(item);
                      onOpen();
                    }}
                  >
                    {item.eventName}
                  </p>
                  <p className="p-4 truncate">{item.date}</p>
                  <p className="p-4 truncate">{item.speaker}</p>
                  <div className="p-4">
                    <Chip
                      variant="dot"
                      className={
                        item.status === 'Completed'
                          ? 'border-0 border-success text-success bg-[#D1FAE5] dark:bg-transparent dark:border-1'
                          : ' bg-[#DBEAFE] border-0 border-primary-dark text-primary-dark dark:bg-transparent dark:border-1'
                      }
                      classNames={{
                        dot:
                          item.status === 'Completed'
                            ? 'bg-success '
                            : 'bg-primary-dark',
                      }}
                      color={
                        item.status === 'Completed' ? 'success' : 'primary'
                      }
                    >
                      {item.status}
                    </Chip>
                  </div>
                </div>
              ))}

              {paginatedData.length <= 0 && search ? (
                <div className="no-data-table">{`No Search Query for "${search}"`}</div>
              ) : paginatedData.length <= 0 ? (
                <div className="no-data-table">No Data Available</div>
              ) : (
                ''
              )}
            </div>

            {/* Pagination */}
            <div className="table-pagination">
              <div
                className="flex justify-between
              items-center min-w-40"
              >
                <Button
                  variant="bordered"
                  isIconOnly
                  isDisabled={currentPage === 1}
                  radius="none"
                  className={`table-pagination-button border-1 mr-3`}
                  onPress={() => handlePageChange(currentPage - 1)}
                >
                  ‹
                </Button>

                <Pagination
                  total={Math.ceil(filteredData.length / rowsPerPage)}
                  page={currentPage}
                  size="sm"
                  radius="full"
                  classNames={{
                    item: 'bg-transparent',
                    cursor: `${
                      Math.ceil(filteredData.length / rowsPerPage) &&
                      'bg-primary-dark'
                    }`,
                  }}
                  onChange={setCurrentPage}
                />

                <Button
                  variant="bordered"
                  isIconOnly
                  radius="none"
                  isDisabled={
                    currentPage === Math.ceil(filteredData.length / rowsPerPage)
                  }
                  className="table-pagination-button border-1 ml-3"
                  onPress={() => handlePageChange(currentPage + 1)}
                >
                  ›
                </Button>
              </div>

              {/* Note: Number of Data to show */}
              <div className="flex items-center  gap-2">
                <p>Show:</p>
                <Select
                  className="w-20"
                  radius="none"
                  variant="bordered"
                  defaultSelectedKeys={[rowsPerPage]}
                  onChange={handleRowsChange}
                  placeholder="10"
                  classNames={{
                    trigger:
                      'border-1 border-primary-nav/10 dark:bg-primary-nav',
                  }}
                  selectedKeys={[rowsPerPage]}
                >
                  <SelectItem key={10}>10</SelectItem>
                  <SelectItem key={20}>20</SelectItem>
                  <SelectItem key={30}>30</SelectItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
