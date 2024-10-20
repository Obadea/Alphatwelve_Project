import { Card } from '@nextui-org/react';
import { cardData } from '../utils/constants';
import { SvgInfoIcon } from '../utils/SvgIcons';
import './Card.css';

const Cards = () => {
  return (
    <div className="flex justify-between gap-3">
      {cardData.map((item, idx) => (
        <Card
          isPressable
          key={idx}
          shadow="none"
          radius="sm"
          className="home-card-container dark:border-transparent dark:bg-primary-nav"
        >
          <div className="flex items-center gap-1">
            <p className="font-semibold text-base text-[#64748B] max-lg:text-sm truncate dark:text-white   ">
              {item.name}
            </p>
            <div className="cursor-pointer mt-0.5">
              <SvgInfoIcon className="stroke-icon-collapse dark:stroke-white" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-xl">{item.amount}</p>
            <item.icon />
            <p
              className={` text-[10px] ${
                item.status === 'up' ? 'text-success' : 'text-danger'
              }`}
            >
              {item.status === 'up' ? '+5.0%' : '-5.0%'}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
