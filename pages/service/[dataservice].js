import { Fragment, useEffect, useId, useRef, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
// import { useSelector } from 'react-redux'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'
import Link from 'next/link'
// import CardBarChart from '@/components/CardBarChart'
// import { CardLineChart } from '@/components/CardLineChart'
import { Bar } from 'react-chartjs-2'

import { Listbox, Transition, Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { Picky } from 'react-picky'
import 'react-picky/dist/picky.css'
import { getDataSlect } from 'utils/getDataSlect'
import PageTitle from '@/components/PageTitle'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
// import TableDaTaService from '@/components/TableDaTaService'
import { filterByCheckbox } from 'utils/filterUtils'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}

export default function DataServicesIN(props) {
  const [selectedPage, setselectedPage] = useState('dn')
  // const filters = useSelector((state) => state.filter)
  const [multiValue, setMultiValue] = useState([])
  // const [SelectedAreaCode, setSelectedAreaCode] = useState(null)
  // const filteredType = useSelector((state) => state.filter.type)
  // const filteredProduct = useSelector((state) => state.filter.product)
  const [listProduct, setListProduct] = useState(props.Product)
  const [listDistrict, setListDistrict] = useState(props.District)
  const [listYear, setListYear] = useState(props.Year)
  const [selectedTypeX, setSelectedTypeX] = useState('กรุณาเลือกประเภท')
  const [selectedFrom_Year, setSelectedFrom_Year] = useState('เริ่มจากปี')
  const [selectedTo_Year, setSelectedTo_Year] = useState('เลือกถึงปี')
  const [selectedDistrict, setSelectedDistrict] = useState('เลือกจังหวัด')
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({})

  const [allProductchecked, setAllProductChecked] = useState([])
  const [allYearchecked, setAllYearChecked] = useState([])
  const [allDistrictchecked, setAllDistrictChecked] = useState([])

  const GGProduct = props.buudata.filter((value) => {
    return (
      value.Type.includes(selectedTypeX) &&
      value.District.includes(selectedDistrict) &&
      value.Year >= selectedFrom_Year &&
      value.Year <= selectedTo_Year
    )
  })

  const ProductJ = GGProduct.reduce((previous, current) => {
    if (!previous.includes(current.Product)) {
      previous.push(current.Product)
    }
    return previous
  }, [])

  const lxProd = ProductJ.map((ProductX) => {
    return { value: ProductX, label: ProductX }
  })

  const mapfixPro = multiValue.map((iui) => iui.value)
  const mastfiltered = GGProduct.filter(function (item) {
    return mapfixPro.includes(item.Product) ? true : false
  })

  // console.log(mastfiltered)

  const GGXAProduct = groupBy(mastfiltered, 'Product')
  const groupProduct = Object.keys(GGXAProduct).map((Product) => {
    return Product
  })

  const ggx = groupBy(mastfiltered, 'Year')
  const groupVcate = Object.keys(ggx).map((Year) => {
    return Year
  })

  const setxdata = groupProduct.map((itex) => {
    let darxF = mastfiltered.filter((data) => {
      return data.Product == itex
    })
    return {
      label: darxF[0].Product,
      data: darxF.map((vdx) => vdx.Value),
      borderColor: '#F1F5F9',
      backgroundColor: '#7B75FF',
    }
  })

  useEffect(() => {
    if (!selectedTypeX && !groupVcate && !setxdata) {
      return
    }
    const getCCCC = async () => {
      setChartData({
        labels: groupVcate,
        datasets: setxdata,
      })
      setChartOptions({
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `L=ปี V=ผลิตภัณฑ์ G=ผลิตภัณฑ์ ข้อมูลพื้นที่`,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
      })
    }

    getCCCC()

    return () => {}
  }, [])

  function handleProductChange(e) {
    if (e.target.checked) {
      setAllProductChecked([...allProductchecked, e.target.value])
    } else {
      setAllProductChecked(allProductchecked.filter((item) => item !== e.target.value))
    }
  }
  function handleDistrictChange(e) {
    if (e.target.checked) {
      setAllDistrictChecked([...allDistrictchecked, e.target.value])
    } else {
      setAllDistrictChecked(allDistrictchecked.filter((item) => item !== e.target.value))
    }
  }
  function handleYearChange(e) {
    if (e.target.checked) {
      setAllYearChecked([...allYearchecked, e.target.value])
    } else {
      setAllYearChecked(allYearchecked.filter((item) => item !== e.target.value))
    }
  }

  console.log(allProductchecked, allDistrictchecked, allYearchecked)

  return (
    <>
      <PageSEO
        title={`DATASERVICE - ${props.dataservice}`}
        description={siteMetadata.description + ' ' + props.dataservice}
      />
      <Image
        className="w-full h-auto object-contain rounded-2xl"
        src={'/static/images/DataServic/data-center.webp'}
        alt="Banner-Contact"
        width="1920"
        height="1080"
      />
      <div className="w-full">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href="/" className="text-gray-400 hover:text-gray-500">
                    Home /<span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Link
                    href={'#'}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={props.dataservice ? 'page' : undefined}
                  >
                    {props.dataservice}
                  </Link>
                </div>
              </li>
            </ol>
          </div>

          <PageTitle>{props.dataservice}</PageTitle>
        </div>
      </div>
      <div className="bg-[url('/static/images/Contact_Us/bg_contact_3.png')] bg-cover py-8 rounded-2xl">
        <div className="mx-auto max-w-4xl bg-gradient-to-b from-gray-100 rounded-2xl">
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
              DATA CENTER
            </h1>
            <p className="text-lg text-center leading-7 text-[#004DB3] dark:text-gray-400">
              ศูนย์ข้อมูลเทคโนโลยีสารสนเทศและการสื่อสาร
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 flex gap-4">
        <button
          type="button"
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-[#004FB3] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(e) => setselectedPage('dn')}
        >
          Download Data
        </button>
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-[#004FB3] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={(e) => setselectedPage('xn')}
        >
          Visualize Data
        </button>
      </div>
      {selectedPage == 'xn' ? (
        <>
          <div className="py-4 md:py-8">
            <div className="text-center">
              <p>
                ประเภท {selectedTypeX && selectedTypeX} จากปี{' '}
                {selectedFrom_Year && selectedFrom_Year} ถึง {selectedTo_Year && selectedTo_Year}{' '}
                <br />
                พื้นที่ {selectedDistrict && selectedDistrict}
              </p>
            </div>
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
              <div>
                <Listbox value={selectedTypeX} onChange={setSelectedTypeX}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        Type
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <span className="block truncate">{selectedTypeX}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.TypeX.map((persoXn, indx) => (
                              <Listbox.Option
                                key={indx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                  )
                                }
                                value={persoXn}
                              >
                                {({ selectedTypeX, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selectedTypeX ? 'font-semibold' : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {persoXn}
                                    </span>

                                    {selectedTypeX ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>

              <div>
                <Listbox value={selectedFrom_Year} onChange={setSelectedFrom_Year}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        From Year
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <span className="block truncate">{selectedFrom_Year}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.Year.map((persoXn, indx) => (
                              <Listbox.Option
                                key={indx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                  )
                                }
                                value={persoXn}
                              >
                                {({ selectedFrom_Year, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selectedFrom_Year ? 'font-semibold' : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {persoXn}
                                    </span>

                                    {selectedFrom_Year ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
              <div>
                <Listbox value={selectedTo_Year} onChange={setSelectedTo_Year}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        To Year
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <span className="block truncate">{selectedTo_Year}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.Year.map((persoXn, indx) => (
                              <Listbox.Option
                                key={indx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                  )
                                }
                                value={persoXn}
                              >
                                {({ selectedTo_Year, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selectedTo_Year ? 'font-semibold' : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {persoXn}
                                    </span>

                                    {selectedTo_Year ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
              <div>
                <Listbox value={selectedDistrict} onChange={setSelectedDistrict}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        District
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <span className="block truncate">{selectedDistrict}</span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.District.map((persoXn, indx) => (
                              <Listbox.Option
                                key={indx}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                  )
                                }
                                value={persoXn}
                              >
                                {({ selectedDistrict, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selectedDistrict ? 'font-semibold' : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {persoXn}
                                    </span>

                                    {selectedDistrict ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>

              <div className="col-span-2 w-full md:w-60">
                <h3>Multi Product</h3>
                <Picky
                  options={lxProd}
                  className="relative cursor-default rounded-md border border-gray-300 bg-white text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  labelKey="label"
                  valueKey="value"
                  multiple={true}
                  includeFilter
                  includeSelectAll
                  value={multiValue}
                  onChange={setMultiValue}
                  renderList={({ items, selected, multiple, selectValue, getIsSelected }) =>
                    items.map((item, ixos) => {
                      const label = `${item.label}` //เลือก? ${item.value % 2 === 0 ? 'ใช่' : 'ไม่'}
                      return (
                        <li key={ixos} onClick={() => selectValue(item)}>
                          {getIsSelected(item) ? <strong>{label}</strong> : label}
                        </li>
                      )
                    })
                  }
                />
              </div>
              <div>
                <p className="py-4 text-center text-xl font-semibold">
                  {mastfiltered && `พบ ${mastfiltered.length} รายการ`}{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
            <div>
              <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh] py-8">
                <div className="text-center">
                  <p>{`กราฟแท่ง ${selectedTypeX} จาก ${selectedFrom_Year} ถึง ${selectedTo_Year} พื้นที่ ${selectedDistrict}`}</p>
                </div>
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>
            <div>
              <div className="bh-white m-auto h-[50vh] w-full rounded-lg border p-4 md:col-span-2 lg:h-[70vh] py-8">
                <div className="text-center">
                  <p>{`กราฟเส้น ${selectedTypeX} จาก ${selectedFrom_Year} ถึง ${selectedTo_Year} พื้นที่ ${selectedDistrict}`}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-3 md:grid-cols-6">
            <div className="p-4">
              <fieldset>
                <h3>Product</h3>
                <legend className="sr-only">Product</legend>
                {props.Product.map((Product, ProductIdx) => (
                  <div key={ProductIdx} className="relative flex items-start py-1">
                    <div className="flex h-5 items-center">
                      <input
                        id={ProductIdx}
                        aria-describedby="Product-description"
                        name={Product}
                        type="checkbox"
                        value={Product}
                        onClick={handleProductChange}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={Product} className="font-medium text-gray-700">
                        {Product}
                      </label>
                      <span id="Product-description" className="text-gray-500">
                        <span className="sr-only">{Product} </span>.
                      </span>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
            <div className="p-4">
              <fieldset>
                <h3>Year</h3>
                <legend className="sr-only">Year</legend>
                {props.Year.map((Year, YearIdx) => (
                  <div key={YearIdx} className="relative flex items-start py-1">
                    <div className="flex h-5 items-center">
                      <input
                        id={YearIdx}
                        aria-describedby="Year-description"
                        name={Year}
                        value={Year}
                        onClick={handleYearChange}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={Year} className="font-medium text-gray-700">
                        {Year}
                      </label>
                      <span id="Year-description" className="text-gray-500">
                        <span className="sr-only">{Year} </span>.
                      </span>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
            <div className="p-4">
              <fieldset>
                <h3>District</h3>
                <legend className="sr-only">District</legend>
                {props.District.map((District, DistrictIdx) => (
                  <div key={DistrictIdx} className="relative flex items-start py-1">
                    <div className="flex h-5 items-center">
                      <input
                        id={DistrictIdx}
                        aria-describedby="District-description"
                        name={District}
                        value={District}
                        onClick={handleDistrictChange}
                        //checked={isCs}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={District} className="font-medium text-gray-700">
                        {District}
                      </label>
                      <span id="District-description" className="text-gray-500">
                        <span className="sr-only">{District} </span>.
                      </span>
                    </div>
                  </div>
                ))}
              </fieldset>
            </div>
          </div>
          <div>
            <p>{`ผลิตภัณฑ์ ${allProductchecked} พื้นที่ ${allDistrictchecked} ปี ${allYearchecked}`}</p>
          </div>
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const { dataservice } = context.query

  const items = await getDataSlect(dataservice)

  const Group = items.reduce((previous, current) => {
    if (!previous.includes(current.Group)) {
      previous.push(current.Group)
    }
    return previous
  }, [])

  const TypeX = items.reduce((previous, current) => {
    if (!previous.includes(current.Type)) {
      previous.push(current.Type)
    }
    return previous
  }, [])

  const Product = items.reduce((previous, current) => {
    if (!previous.includes(current.Product)) {
      previous.push(current.Product)
    }
    return previous
  }, [])

  const District = items.reduce((previous, current) => {
    if (!previous.includes(current.District)) {
      previous.push(current.District)
    }

    return previous
  }, [])

  const Year = items.reduce((previous, current) => {
    if (!previous.includes(current.Year)) {
      previous.push(current.Year)
    }
    previous.sort()
    return previous
  }, [])

  return {
    props: {
      buudata: items,
      TypeX,
      Product,
      Year,
      District,
      dataservice,
      Group,
    },
  }
}
