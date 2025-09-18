import React from 'react'

const InputComponent = () => {
  return (
      <div className='pt-3 w-full mx-auto"'>
          <form className="relative w-full">
              <input
                  type="text"
                  placeholder="Search the knowledge base..."
                  className="w-full py-4 px-6 rounded-2xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5236CB]"
              />
              <button
                  type="submit"
                  className="absolute right-0 top-0 h-full bg-[#53B656] text-white rounded-r-2xl px-4 flex items-center justify-center"
              >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11.7297644,1.56712981 C9.1503137,-0.644294379 5.30290309,-0.496046815 2.90126795,1.90730746 C0.499632815,4.31066174 0.354138355,8.15817744 2.56740774,10.7360451 C4.78067712,13.3139128 8.60590394,13.7523024 11.345,11.742 L11.344,11.742 C11.3733333,11.782 11.406,11.8203333 11.442,11.857 L15.292,15.707 C15.6824653,16.0977414 16.3157585,16.0979653 16.7065,15.7075 C17.0972414,15.3170347 17.0974653,14.6837415 16.707,14.293 L12.857,10.443 C12.8212661,10.40679 12.7828212,10.3733596 12.742,10.343 C14.7503419,7.60346614 14.3092152,3.778554 11.7297644,1.56712981 Z M9.75000002,10.3971144 C8.35769516,11.200962 6.64230484,11.200962 5.24999998,10.3971144 C3.85769513,9.5932668 2.99999998,8.10769519 3,6.50000001 C3.00000004,4.01471867 5.01471865,2.00000008 7.5,2.00000008 C9.98528135,2.00000008 12,4.01471867 12,6.50000001 C12,8.10769519 11.1423049,9.5932668 9.75000002,10.3971144 Z" />
                  </svg>
              </button>
          </form>
    </div>
  )
}

export default InputComponent
