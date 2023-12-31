import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { Dataaaaa } from '@/data/dataset'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// const DEFAULT_LAYOUT = 'AuthorLayout'

// export async function getStaticProps() {
//   const authorDetails = await getFileBySlug('authors', ['default'])
//   return { props: { authorDetails } }
// }

const DataSetAbout = [
  {
    titlex: 'สำนักงานเศรษฐกิจการเกษตรที่ 6',
    imgx: '/static/images/About_Us/Cooperation/logo-1.png',
  },
  {
    titlex: 'สำนักงานสถิติจังหวัดจันทบุรี',
    imgx: '/static/images/About_Us/Cooperation/logo-2.jpg',
  },
  {
    titlex: 'สำนักงานพัฒนาวิทยาศาสตร์',
    imgx: '/static/images/About_Us/Cooperation/logo-3.png',
  },
  {
    titlex: 'สำนักงานพัฒนาวิทยาศาสตร์',
    imgx: '/static/images/About_Us/Cooperation/logo-4.png',
  },
]

export default function About(props) {
  return (
    <>
      <PageSEO title={`About Us - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div>
        <Image
          className="w-full h-auto object-contain rounded-none"
          src={'/static/images/About_Us/Banner_ax.jpg'}
          alt="banner"
          width="1920"
          height="1080"
        />
        <div className="py-2 flex sm:block">
          <div className="relative mx-auto max-w-6xl py-16">
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 content-end bg-[#008080] rounded-lg">
              <div className="col-span-2 w-full h-auto">
                <Image
                  className="w-full h-auto object-contain rounded-l-lg"
                  src={'/static/images/Home_Hero.jpg'}
                  alt="bg_data_center_2"
                  width="500"
                  height="300"
                />
              </div>
              <div className="px-4 py-4 h-[380px] col-span-2 text-gray-100 overflow-y-auto">
                <p className="prose  text-gray-100">
                  ก้าวสำคัญของโลกอนาคตด้วยการขับเคลื่อนด้วยข้อมูล
                  เป็นสิ่งสำคัญที่จะต้องมีการเตรียมความพร้อมของการจัดเก็บข้อมูลที่ถูกต้อง
                  เข้าใจลักษณะพื้นฐานของข้อมูล มีกระบวนการจัดเก็บข้อมูลที่ถูกหลักการ
                  เพื่อสามารถนำข้อมูลไปใช้ประโยชน์ได้จริง การสร้างระบบจัดเก็บข้อมูลให้มีคุณภาพ
                  เข้าถึงง่าย จึงมีความจำเป็น ที่ทำให้ข้อมูลมีมาตรฐาน
                  สามารถยกระดับมูลค่าของข้อมูลในรูปแบบงานวิจัยทางวิทยาศาสตร์ และสังคมศาสตร์
                  พร้อมด้วยการวิเคราะห์ข้อมูลเพื่อตอบโจทย์ความต้องการของผู้ใช้บริการทั้งเกษตรกร
                  แรงงาน ภาคเอกชน และหน่วยงานรัฐบาล ดังนั้น ทีมงาน มหาวิทยาลัยบูรพา วิทยาเขตจันทบุรี
                  และทีมงานคณาจารย์ คณะวิทยาศาสตร์และศิลปศาสตร์
                  จึงได้เริ่มการจัดเก็บบัญชีข้อมูลโดยเริ่มต้นความร่วมมือจากหน่วยงานภาครัฐในจังหวัดจันทบุรี
                  เพื่อที่จะสร้างศูนย์ข้อมูลในภาคตะวันออก
                  ที่คาดหวังว่าสามารถตอบโจทย์ความต้องการของประชาชนในจังหวัดด้วยมูลค่าของข้อมูล
                  โดยเฉพาะอย่างยิ่งการช่วยเหลือกลุ่มเกษตรกรที่เป็นรากฐานสำคัญของประเทศไทย
                  นอกจากนี้ทางทีมงานวางแผนที่จะพัฒนาระบบฐานข้อมูล ๆ การใช้เทคโนโลยีด้านข้อมูล
                  และสร้าง website เพื่อเสนอข้อมูลด้วยภาพ รวมไปถึงระบบการพยากรณ์ต่างๆ
                  ที่ประชาชนสามารถเข้าถึงข้อมูลพื้นฐานทางการเกษตร และเศรษฐกิจได้
                  โดยศูนย์ข้อมูลแห่งนี้เกิดจากการเริ่มต้นจากศูนย์ข้อมูลทางการเกษตรในจังหวัดจันทบุรี
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          โครงสร้างการบริหาร
        </h2>
        <div className="mx-auto max-w-6xl ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-4">
            <div className="p-10">
              <Image
                className="w-full h-auto object-contain rounded-lg "
                src={'https://baansuanpui.com/' + props.itemm[0].data.path}
                alt={props.itemm[0].data.name_surname_th}
                width="300"
                height="500"
              />
            </div>

            <div className="col-span-2 flex items-center max-w-lg mx-auto">
              <p className="text-md text-center text-[#333]">{props.itemm[0].data.detail}</p>
            </div>
          </div>
          <div>
            <h2 className="py-8 pl-10 text-lg text-start font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
              คณะกรรมการ
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 py-4">
            {props.itemm.slice(1).map((dax) => (
              <div key={dax.data.id} className="text-center p-10">
                <Image
                  className="w-full h-auto object-contain rounded-lg"
                  src={'https://baansuanpui.com/' + dax.data.path}
                  alt={dax.data.name_surname_th}
                  width="300"
                  height="500"
                />
                <div className="py-4">
                  <p className="text-lg font-semibold text-gray-500">{dax.data.name_surname_th}</p>
                  <p className="text-md text-gray-500">{dax.data.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        <h3 className="text-lg text-center font-extrabold leading-9 tracking-tight text-[#004DB3] dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
          การทำงานร่วมกัน
        </h3>
        <div className="mx-auto py-4 max-w-6xl">
          <Swiper
            slidesPerView={4}
            spaceBetween={2}
            //centeredSlides={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            //className="py-8"
          >
            {props.itemx.map((itexm, ickd) => (
              <SwiperSlide key={ickd} className="my-8">
                <div className="flex flex-col items-center text-center">
                  <Image
                    className="w-32 h-auto object-contain rounded-lg  py-6"
                    src={'https://baansuanpui.com/' + itexm.path}
                    alt={itexm.title_th}
                    width="500"
                    height="500"
                  />
                  <p className="text-xs w-full ">{itexm.title_th}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="mx-auto text-center grid grid-cols-2 md:flex md:flex-row flex-warp items-end gap-4 justify-center md:gap-10 py-4">
          <div className="flex flex-col w-32 h-auto">
            <Image
              className="w-full h-auto object-contain rounded-lg"
              src={'/static/images/About_Us/Cooperation/logo-1.png'}
              alt="สำนักงานเศรษฐกิจการเกษตรที่ 6"
              width="500"
              height="500"
            />
            <p>สำนักงานเศรษฐกิจการเกษตรที่ 6</p>
          </div>
          <div className="flex flex-col w-32 h-auto">
            <Image
              className="w-full h-auto object-contain rounded-lg"
              src={'/static/images/About_Us/Cooperation/logo-2.jpg'}
              alt="สำนักงานสถิติจังหวัดจันทบุรี"
              width="500"
              height="500"
            />
            <p>สำนักงานสถิติจังหวัดจันทบุรี</p>
          </div>
          <div className="flex flex-col w-32 h-auto">
            <Image
              className="w-full h-auto object-contain rounded-lg"
              src={'/static/images/About_Us/Cooperation/logo-3.png'}
              alt="สำนักงานพัฒนาวิทยาศาสตร์"
              width="500"
              height="500"
            />
            <p>สำนักงานพัฒนาวิทยาศาสตร์</p>
          </div>
          <div className="flex flex-col w-32 h-auto">
            <Image
              className="w-full h-auto object-contain rounded-lg"
              src={'/static/images/About_Us/Cooperation/logo-21.png'}
              alt="สำนักงานพัฒนาวิทยาศาสตร์"
              width="500"
              height="500"
            />
            <p>สำนักงานพัฒนาวิทยาศาสตร์</p>
          </div>
        </div> */}
      </div>
    </>
  )
}
//"The idea is to change raw data into information, and then use that information to get insight

export async function getServerSideProps(context) {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const res = await fetch(`https://baansuanpui.com/api/workgroup`)
  const resx = await fetch(`https://baansuanpui.com/api/personnel`)
  //https://baansuanpui.com/api/personnel
  const itemsZX = await res.json()
  const itemsXX = await resx.json()
  return {
    props: { itemx: itemsZX, itemm: itemsXX },
  }
}
