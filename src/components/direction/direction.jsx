import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import logo from "../../assets/logoMain.svg"
import cardir from "../../assets/cardir.svg"
import cycledir from "../../assets/cycledir.svg"
import bus202 from "../../assets/bus202.svg"
import bus72B from "../../assets/bus72B.svg"

function Direction() {

    return (
        <div className="flex flex-col items-center">
            <nav className="fixed top-0 left-0 w-full bg-[#07567b] p-4">
                <ul className="flex justify-between space-x-4 items-center text-white">
                    <li>
                        <img src={logo} className='w-[8vh]' />
                    </li>
                    <li>
                        <Link
                            to="carSection"
                            smooth={true}
                            spy={true}
                            offset={-70}
                            duration={500}
                            className=" hover:text-[#FFC60B] cursor-pointer md:text-[24px]"
                        >
                            Car
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="ttcSection"
                            smooth={true}
                            spy={true}
                            offset={-70}
                            duration={500}
                            className=" hover:text-[#FFC60B] cursor-pointer md:text-[24px]"
                        >
                            TTC
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="bicycleSection"
                            smooth={true}
                            spy={true}
                            offset={-70}
                            duration={500}
                            className=" hover:text-[#FFC60B] cursor-pointer md:text-[24px]"
                        >
                            Bicycle
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => window.history.back()}
                            className="bg-[#FFC60B] text-black px-4 rounded-lg py-2 md:text-[20px] "
                        >
                            Back
                        </button>
                    </li>

                </ul>
            </nav>
            <div className="mt-24 p-4 text-black ">

                <div id="addressSection" className="mb-8">
                    <h2 className="text-2xl font-bold">Address and Directions</h2>
                    <p>There is construction and road closures at downtown waterfront.</p>
                    <p>Use the following for most efficient travel:</p>
                </div>
                <div id="carSection" className="mb-8 pt-8">
                    <h2 className="text-2xl font-bold">Directions by Car</h2>
                    <p>
                        By Car: The Docks Driving Range, 176 Cherry St, Toronto, ON M5A 3L2
                    </p>
                    <p>
                        Unless you follow the directions below, you will get stuck in
                        downtown waterfront construction road closures and be stuck. Google
                        Maps does NOT have the correct construction updates and you will be
                        directed the WRONG WAY and end up stuck in construction traffic! To
                        avoid these problems use the following directions exactly and
                        you'll be at the Water Taxi dock in 5-10 min after exiting the DVP.
                        A map with the route outlined also included below.
                    </p>
                    <img
                        src={cardir}
                        alt="Driving Map"
                        className="my-4 max-w-full"
                    />
                    <p>
                        Exit the Don Valley Parkway at Lakeshore Blvd. On Lakeshore Blvd.,
                        TURN LEFT and head two blocks east to Bouchette St. At Bouchette St.
                        turn right and head one block south to Commissioners St. At
                        Commissioners St. turn right and head two blocks west to the Don
                        Valley Roadway. At the Don Valley Roadway, turn right and head one
                        block north to Villiers St. At Villiers St. head west to the end of
                        the street to Cherry St. At Cherry St. turn left and head south
                        over the new bridge and then turn right at the Docks Driving Range.
                        The entrance is immediately BEFORE the drawbridge. Find suitable
                        parking and follow the signs. Use the same entrance as the Docks
                        Driving Range to access the water taxi dock.
                    </p>
                </div>
                <div id="ttcSection" className="mb-8 pt-8">
                    <h2 className="text-2xl font-bold">Directions by TTC</h2>
                    <p>
                        By TTC: The Docks Driving Range, 176 Cherry St, Toronto, ON M5A 3L2
                    </p>
                    <p>
                        Take the TTC bus #202 which leaves every 15 minutes from the corner
                        of Front and Bay St. The bus drops you off right at the "Docks
                        Driving Range" at 176 Cherry St. which is then a short walk to the
                        Otter Guy dock.
                    </p>
                    <p>
                        The TTC 202 bus from union station:{' '}
                        <a
                            href="https://www.ttc.ca/routes-and-schedules/202/0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            TTC 202 bus schedule
                        </a>
                    </p>
                    <p>
                        The 72 B Pape Station bus that goes to Villiars and Cherry Street:{' '}
                        <a
                            href="https://www.ttc.ca/routes-and-schedules/72/0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            TTC 72B bus schedule
                        </a>
                    </p>
                    <img
                        src={bus202}
                        alt="TTC 202 Map"
                        className="my-4 max-w-full"
                    />
                    <img
                        src={bus72B}
                        alt="TTC 72B Map"
                        className="my-4 max-w-full"
                    />
                </div>
                <div id="bicycleSection" className="mb-8 pt-8">
                    <h2 className="text-2xl font-bold">Directions by Bicycle</h2>
                    <p>
                        By Bicycle: The Docks Driving Range, 176 Cherry St, Toronto, ON M5A
                        3L2
                    </p>
                    <p>
                        Just take the Martin Goodman trail and head south on Cherry St. Make
                        a right toward the entrance of the Docks Driving Range and follow
                        the signs for Water Taxi.
                    </p>
                    <img
                        src={cycledir}
                        alt="Bicycle Map"
                        className="my-4 max-w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Direction