import React from 'react';
import {RGNodeExpandHolderProps} from "../../../types-react";

const RGNodeExpandHolder: React.FC<RGNodeExpandHolderProps> = ({expandButtonClass, expandOrCollapseNode, expandHolderPosition, color}) => {
  const handleAction = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    expandOrCollapseNode(e);
  };

  // 检测是否为触摸设备
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  
  return (
    <div
      className={`c-expand-positon-${expandHolderPosition} c-btn-open-close`}
    >
      <span
        className={expandButtonClass}
        style={{ backgroundColor: color }}
        {...(isTouchDevice 
          ? {
              onClick: handleAction,
              onTouchEnd: handleAction
            } 
          : {
              onClickCapture: handleAction,
              onTouchEnd: handleAction
            }
        )}
      ></span>
    </div>
  );
};

export default RGNodeExpandHolder;
