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
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import './Table.css';
import { SvgDownloadIcon, SvgThreeDotIcon } from '../utils/SvgIcons';
import { eventData } from '../utils/constants';
import { useState } from 'react';

const Table = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalData, setModalData] = useState();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        radius="none"
        classNames={{
          closeButton:
            'top-[17.5px] mr-[14px] border-1 border-primary-nav/20 p-1 ',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">
                <p className="font-semibold text-lg">{modalData?.eventName}</p>
              </ModalHeader> */}
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
            />
            <Select
              className="table-select"
              radius="none"
              variant="bordered"
              placeholder="Date"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
            >
              <SelectItem>Today</SelectItem>
              <SelectItem className="table-select-item">Last Week</SelectItem>
            </Select>
            <Select
              className="w-28"
              radius="none"
              variant="bordered"
              placeholder="Status"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
            >
              <SelectItem>Completed</SelectItem>
              <SelectItem className="table-select-item">In Progress</SelectItem>
            </Select>
            <Select
              className="table-select"
              radius="none"
              variant="bordered"
              placeholder="Name"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
            >
              <SelectItem>Today</SelectItem>
              <SelectItem className="table-select-item">Last Week</SelectItem>
            </Select>
            <p className="font-semibold">Displaying 100 results</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Sort:</p>
            <Select
              className="w-36"
              radius="none"
              variant="bordered"
              placeholder="Most Recent"
              classNames={{
                trigger: 'border-1 border-primary-nav/10 dark:bg-primary-nav',
              }}
            >
              <SelectItem>Most Recent</SelectItem>
              <SelectItem>Last Week</SelectItem>
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
        {/* Note: Table */}
        <div className="table-row-wrapper">
          <div className="table-row-header">
            <div>
              <p>Event Name</p>
            </div>
            <div>
              <p>Date</p>
            </div>
            <div>
              <p>Speaker</p>
            </div>
            <div>
              <p>Status</p>
            </div>
          </div>
          <div>
            {eventData.slice(0, 10).map((item) => (
              <div className="table-row-item dark:bg-primary-nav ">
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setModalData(item);
                    onOpen();
                  }}
                >
                  {item.eventName}
                </p>
                <p>{item.date}</p>
                <p>{item.speaker}</p>
                <Chip
                  variant="dot"
                  className={
                    item.status === 'Completed'
                      ? ' border-0 border-success text-success bg-[#D1FAE5] dark:bg-transparent dark:border-1'
                      : ' bg-[#DBEAFE] border-0 border-primary-dark text-primary-dark dark:bg-transparent dark:border-1'
                  }
                  classNames={{
                    dot:
                      item.status === 'Completed'
                        ? 'bg-success '
                        : 'bg-primary-dark',
                  }}
                  color={item.status === 'Completed' ? 'success' : 'primary'}
                >
                  {item.status}
                </Chip>
              </div>
            ))}
            {/* Note: Pagination */}
            <div className="table-pagination">
              <div className="flex justify-between items-center w-[208px]">
                <Button
                  variant="bordered"
                  isIconOnly
                  radius="none"
                  className="table-pagination-button border-1"
                >
                  ‹
                </Button>
                <p className="table-pagination-number">1</p>
                <p className="">2</p>
                <p className="">3</p>
                <Button
                  variant="bordered"
                  isIconOnly
                  radius="none"
                  className="table-pagination-button border-1"
                >
                  ›
                </Button>
              </div>

              {/* Note: Data to render */}
              <div className="flex items-center  gap-2">
                <p>Show:</p>
                <Select
                  className="w-28"
                  radius="none"
                  variant="bordered"
                  placeholder="Status"
                  classNames={{
                    trigger:
                      'border-1 border-primary-nav/10 dark:bg-primary-nav',
                  }}
                >
                  <SelectItem>10 rows</SelectItem>
                  <SelectItem>20 rows</SelectItem>
                  <SelectItem>30 rows</SelectItem>
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
