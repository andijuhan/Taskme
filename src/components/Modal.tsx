import React, { Fragment, ReactElement, ReactText } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
   isOpen: boolean;
   closeModal: () => void;
   children: ReactElement | ReactText;
}

const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-200'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
               >
                  <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />
               </Transition.Child>

               <div className='fixed inset-0 overflow-y-auto'>
                  <div className='flex min-h-full items-center justify-center p-4 text-center'>
                     <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-200'
                        enterFrom='opacity-0 scale-95'
                        enterTo='opacity-100 scale-100'
                        leave='ease-in duration-100'
                        leaveFrom='opacity-100 scale-100'
                        leaveTo='opacity-0 scale-95'
                     >
                        <Dialog.Panel className='w-[600px] max-w-4xl transform overflow-hidden rounded-2xl bg-white px-2 py-6 text-left align-middle shadow-xl transition-all'>
                           {children}
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};

export default Modal;
