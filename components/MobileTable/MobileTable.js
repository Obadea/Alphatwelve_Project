import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarGroup,
  Button,
  Chip,
  cn,
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
import {
  SvgDownloadIcon,
  SvgSearchIcon,
  SvgSortUpIcon,
  SvgThreeDotIcon,
  SvgChevronCloseIcon,
} from '../utils/SvgIcons';
import { eventData } from '../utils/constants';
import React, { useState } from 'react';
import './MobileTable.css';

const MobileTable = () => {
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
  const [sortStatus, setSortStatus] = useState(false);

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
      if (sortStatus) {
        return a.status.localeCompare(b.status);
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
                      classNames={{ base: 'border-2 border-transparent' }}
                    />
                    <Avatar
                      src="./avatarImage2.png"
                      classNames={{ base: 'border-2 border-transparent' }}
                    />
                    <Avatar
                      src="./avatarImage3.png"
                      classNames={{ base: 'border-2 border-transparent' }}
                    />
                  </AvatarGroup>
                  <p>{`${modalData?.numGuestSpeakers} Guest Speakers: ${modalData?.speaker}`}</p>
                  <p>{`${modalData?.attendees} Attendees`}</p>
                </div>
              </ModalBody>
              <ModalFooter className="flex justify-between flex-col items-center py-5 bg-[#F8FAFC] gap-3 dark:bg-primary-unselect">
                <Button
                  variant="bordered"
                  className="bg-white w-full text-black"
                  onPress={onClose}
                  radius="none"
                >
                  Edit
                </Button>
                <Button color="danger" radius="none" className=" w-full">
                  Delete
                </Button>
                <Button
                  className="bg-primary-dark text-white  w-full"
                  radius="none"
                >
                  Mark as completed
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <div className="mobile-table-container">
        <div className="mobile-table-filter-wrapper">
          <div className="mobile-table-filter-container">
            <Input
              type="search"
              radius="none"
              className="mobile-table-input"
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
              className="mobile-table-select"
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
              className=""
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
            <Select
              className=""
              radius="none"
              variant="bordered"
              placeholder="Name"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
            >
              <SelectItem key="Name">Name</SelectItem>
              <SelectItem key="Obadiah Gbenga" className="truncate">
                Obadiah Gbenga
              </SelectItem>
            </Select>
            <p className="font-semibold mb-3">{`Displaying ${filteredData.length} results`}</p>
          </div>
          <div className="mobile-table-sort-container">
            <p className="">Sort:</p>
            <Select
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
        <div className="mobile-table-row-wrapper">
          <div className="mobile-table-row-header">
            <div
              className="mobile-table-single-header"
              onClick={() => {
                setSortEventName(!sortEventName);
                setSortStatus(false);
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
              className="mobile-table-single-header"
              onClick={() => {
                setSortStatus(!sortStatus);
                setSortEventName(false);
              }}
            >
              <p>Status</p>
              {sortStatus ? (
                <SvgSortUpIcon className="stroke-[#64748b] dark:stroke-primary-dark" />
              ) : (
                ''
              )}
            </div>
          </div>
          <div>
            <div className="overflow-y-auto overflow-x-hidden">
              <Accordion showDivider={false} className="p-0">
                {paginatedData.map((item, idx) => (
                  <AccordionItem
                    key={item.eventName}
                    aria-label={item.eventName}
                    indicator={
                      <SvgChevronCloseIcon className="dark:stroke-white stroke-icon-collapse" />
                    }
                    classNames={{
                      startContent: ' w-2 ml-1 data-[open=true]:bg-slate-200',
                      trigger: 'gap-0 flex-row-reverse',
                      indicator: 'data-[open=true]:rotate-90 ml-1',
                    }}
                    title={
                      <div className="mobile-table-row-item">
                        <p className="px-4 truncate">{item.eventName}</p>

                        {/* Chip */}
                        <div className="px-4">
                          <Chip
                            size="sm"
                            className={
                              item.status === 'Completed'
                                ? 'border-0 border-success text-white bg-success'
                                : 'border-0 bg-primary-dark text-white'
                            }
                          >
                            {item.status}
                          </Chip>
                        </div>
                      </div>
                    }
                  >
                    <div className="dark:bg-primary-nav flex justify-between items-center px-4 gap-3 text-[13px]">
                      <p className="py-3 truncate ">{item.speaker}</p>
                      <p className="py-3 truncate">{item.date}</p>
                    </div>
                    <Button
                      radius="none"
                      onPress={() => {
                        setModalData(item);
                        onOpen();
                      }}
                      className="mobile-open-modal-btn "
                    >
                      REPLACE
                    </Button>
                  </AccordionItem>
                ))}
              </Accordion>

              {paginatedData.length <= 0 && search ? (
                <div className="mobile-no-data-table">{`No Search Query for "${search}"`}</div>
              ) : paginatedData.length <= 0 ? (
                <div className="mobile-no-data-table">No Data Available</div>
              ) : (
                ''
              )}
            </div>

            {/* Pagination */}
            <div className="mobile-table-pagination">
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
                  className="z-0"
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

export default MobileTable;
