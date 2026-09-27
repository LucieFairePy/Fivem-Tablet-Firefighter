local isOpen = false

local CLOSE_ANIM_TIMEOUT = 1200

local closing = false

local function setTablet(state, route)
  if state == isOpen then return end

  isOpen = state
  closing = false

  SetNuiFocus(state, state)

  SendNUIMessage({
    action = state and 'open' or 'close',
    route  = route or Config.StartRoute,
  })
end

local function requestCloseTablet()
  if not isOpen or closing then return end

  closing = true
  SendNUIMessage({ action = 'requestClose' })

  CreateThread(function()
    Wait(CLOSE_ANIM_TIMEOUT)

    if closing and isOpen then
      setTablet(false)
    end
  end)
end

local function IsPlayerAllowed()
  if #Config.AllowedJobs == 0 then
    return true
  end

  return true
end

local function CanOpen()
  if not IsPlayerAllowed() then
    return false, 'Vous n\'avez pas accès à cette tablette.'
  end

  if Config.BlockWhileInVehicleDriving then
    local ped = PlayerPedId()
    if IsPedInAnyVehicle(ped, false)
       and GetPedInVehicleSeat(GetVehiclePedIsIn(ped, false), -1) == ped then
      return false, 'Impossible de consulter la tablette en conduisant.'
    end
  end

  return true
end

local function Notify(message)
  BeginTextCommandThefeedPost('STRING')
  AddTextComponentSubstringPlayerName(message)
  EndTextCommandThefeedPostTicker(false, true)
end

RegisterCommand(Config.Command, function()
  local allowed, reason = CanOpen()

  if not allowed then
    Notify(reason)
    return
  end

  if isOpen then
    requestCloseTablet()
  else
    setTablet(true)
  end
end, false)

if Config.DefaultKey then
  RegisterKeyMapping(
    Config.Command,
    'Ouvrir la tablette de secourisme',
    'keyboard',
    Config.DefaultKey
  )
end

RegisterNUICallback('close', function(_, cb)
  setTablet(false)
  cb({ ok = true })
end)

exports('OpenAt', function(route)
  local allowed, reason = CanOpen()

  if not allowed then
    Notify(reason)
    return false
  end

  setTablet(true, route)
  return true
end)

exports('IsOpen', function()
  return isOpen
end)

AddEventHandler('onResourceStop', function(resource)
  if resource ~= GetCurrentResourceName() then return end
  if not isOpen then return end

  SetNuiFocus(false, false)
end)

CreateThread(function()
  while true do
    Wait(500)

    if isOpen and IsEntityDead(PlayerPedId()) then

      setTablet(false)
    end
  end
end)
